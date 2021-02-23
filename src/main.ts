import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createDocument } from './swagger/swagger';
// import {loggerFunction} from "./middleware/logger"
import {SwaggerModule} from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(loggerFunction)  //globaly applyin on the routes
  //calling swagger middle ware
  SwaggerModule.setup('api',app,createDocument(app))
  await app.listen(3001);
}
bootstrap();
