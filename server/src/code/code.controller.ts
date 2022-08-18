import { Controller, Get } from '@nestjs/common';
import { CodeService } from './code.service';

@Controller('code')
export class CodeController {
  constructor(private codeService: CodeService) {}

  @Get()
  findAll() {
    return this.codeService.findAll();
  }
}