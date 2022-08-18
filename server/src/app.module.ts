import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginService } from './login/login.service';
import { CodeService } from './code/code.service';
import { RefreshService } from './refresh/refresh.service';
import { LyricsService } from './lyrics/lyrics.service';
import { LoginController } from './login/login.controller';
import { CodeController } from './code/code.controller';
import { RefreshController } from './refresh/refresh.controller';
import { LyricsController } from './lyrics/lyrics.controller';

@Module({
  imports: [],
  controllers: [AppController, LoginController, CodeController, RefreshController, LyricsController],
  providers: [AppService, LoginService, CodeService, RefreshService, LyricsService],
})
export class AppModule {}
