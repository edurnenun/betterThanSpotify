import { Controller, Get } from '@nestjs/common';
import { LyricsService } from './lyrics.service';

@Controller('lyrics')
export class LyricsController {
  constructor(private lyricsService: LyricsService) {}

  @Get()
  findAll() {
    return this.lyricsService.findAll();
  }
}
