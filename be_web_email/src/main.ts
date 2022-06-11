import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.APP_PORT, () => {
    console.log(`🚀 port ${process.env.APP_PORT} is live`);
  });
}
bootstrap();
