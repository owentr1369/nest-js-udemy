import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import CookieSession from 'cookie-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app
    .use(
      CookieSession({
        keys: ['abcxyz123'],
      }),
    )
    .useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
