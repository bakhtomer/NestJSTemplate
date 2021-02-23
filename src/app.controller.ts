import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MainDto } from './mainDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  postHello(@Body() mainDto:MainDto): string {
    return this.appService.postHello(mainDto);
  }
}
