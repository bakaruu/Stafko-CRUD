import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // Import the ValidationPipe class

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: 'http://localhost:5173',
  });
  await app.listen(3000);

  
  // app.enableCors({
  //   origin: function (origin, callback) {
  //     const port = Number(origin.split(':')[2]);
  //     if (port >= 5173 && port <= 5200) {
  //       callback(null, true)
  //     } else {
  //       callback(new Error('Not allowed by CORS'))
  //     }
  //   }
  // });
  // await app.listen(3000);
}
bootstrap();
