import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from "@nestjs/common";
import { LoggerMiddleware } from "./middleware/logger";  //for class middleware
// import {loggerFunction} from "./middleware/logger"
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.modules";
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';
@Module({
  imports: [UserModule, PostModule],
  controllers: [AppController, PostController],
  providers: [AppService, PostService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware) //for class middleware
      // .apply(loggerFunction)    //applying logger function
      .exclude(
        { path: "users", method: RequestMethod.GET }
        //   // {path:'users',method:RequestMethod.PUT},
        //   // 'cats/(.*)'
      ) //this method use to exclude paths for which not to apply middleware
      .forRoutes("users");
  }
}
// For Adding multiple middlewares
// consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);
