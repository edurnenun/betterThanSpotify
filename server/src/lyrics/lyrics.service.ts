import { Injectable } from '@nestjs/common';

@Injectable()
export class LyricsService {
  findAll(): any {
    return 'findLyrics funcionando';
  }
}
