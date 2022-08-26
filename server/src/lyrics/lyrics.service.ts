import { Injectable } from '@nestjs/common';
import * as lyricsFinder from 'lyrics-finder';

@Injectable()
export class LyricsService {
  async findLyric(artist, track) {
    return { lyrics: (await lyricsFinder(artist, track)) || '' };
  }
}
