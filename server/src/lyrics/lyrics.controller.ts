import { Controller, Get, Query } from '@nestjs/common';
import { LyricsService } from './lyrics.service';

@Controller('lyrics')
export class LyricsController {
  constructor(private lyricsService: LyricsService) {}

  @Get()
  findLyric(@Query('artist') artist, @Query('track') track) {
    return this.lyricsService.findLyric(artist, track);
  }
}
