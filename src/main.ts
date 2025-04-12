import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });
  const port = parseInt(process.env.PORT || '8080', 10);
  console.log(`🚀 Server is running on http://localhost:${port}`);
  await app.listen(port);
}
void bootstrap();
