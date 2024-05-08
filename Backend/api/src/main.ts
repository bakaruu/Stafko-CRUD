import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para todas las solicitudes
  //app.enableCors();

  // Habilitar CORS solo para un origen específico
  app.enableCors({
    origin: 'http://localhost:5173' // reemplaza esto con el origen de tu aplicación frontend
  });

 


  await app.listen(3000);
}
bootstrap();
