import { Controller, Post, Body } from '@nestjs/common';
import { CodeService } from './code.service';
import CodeDto from './code.dto';

@Controller('code')
export class CodeController {
  constructor(private codeService: CodeService) {}

  @Post()
  refresh(@Body() codeDto: CodeDto) {
    console.dir(codeDto);
    return this.codeService.authorizeCode(codeDto);
  }
}
