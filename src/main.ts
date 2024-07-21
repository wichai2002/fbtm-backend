import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("FBTM API")
    .setDescription("FBTM API description")
    .setVersion("1")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api/swagger/", app, document);

  await app.listen(3000);
}
bootstrap();
