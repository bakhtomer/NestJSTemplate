import {
  Body,
  Controller,
  Get,
  HttpException,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from "@nestjs/common";
import { UserService } from "./user.services";
import { AllExceptionsFilter } from "../filterExceptions";
import { CreateUserDto } from "./userDto";
import { RolesGuard } from "guard/user.guard";
import { LoggingInterceptor } from "../../Interceptors/intecept";
@UseGuards(RolesGuard)  //once created can be connected with controller as
@UseInterceptors(new LoggingInterceptor())  //all middle ware uses "@Use" keywore 
//these cab be regiested globally by using express middle ware in the main.ts file
//with app.useGlobalinterceptor( new logginInterCeptor)
 @Controller("users")
 export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/:id')
  getHello(): string {
    return this.userService.getHello();
  }
  @Post("/")
  @UseFilters(new AllExceptionsFilter())
  postHello(@Body(new ValidationPipe()) createUserDto:CreateUserDto): string {
    // throw new NotFoundException();
    return this.userService.postHello();
  }

  @Put("/:id")
  @UseFilters(new AllExceptionsFilter())
  putHello(@Param('id',ParseIntPipe) id:number): string {
    return this.userService.putHello();
  }

  @Patch("/")
  patchHello(): string {
    return this.userService.patchHello();
  }
}
