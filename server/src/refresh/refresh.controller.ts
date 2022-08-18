import { Controller, Get } from '@nestjs/common';
import { RefreshService } from './refresh.service';

@Controller('refresh')
export class RefreshController {
  constructor(private refreshService: RefreshService) {}

  @Get()
  findAll() {
    return this.refreshService.findAll();
  }
}
