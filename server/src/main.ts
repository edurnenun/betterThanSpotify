import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

/*

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  await app.listen(3001);
}
bootstrap();
*/
