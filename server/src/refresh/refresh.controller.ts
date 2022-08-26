import { Controller, Post, Body } from '@nestjs/common';
import { RefreshService } from './refresh.service';
import RefreshDto from './refresh.dto';

@Controller('refresh')
export class RefreshController {
  constructor(private refreshService: RefreshService) {}

  @Post()
  refresh(@Body() refreshDto: RefreshDto) {
    return this.refreshService.refreshToken(refreshDto);
  }
}
