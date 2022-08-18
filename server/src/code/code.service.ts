import { Injectable } from '@nestjs/common';

@Injectable()
export class CodeService {
  findAll(): any {
    return 'findAll funcionando';
  }
}
