import { Injectable } from '@nestjs/common';

@Injectable()
export class RefreshService {
  findAll(): any {
    return 'findRefresh funcionando';
  }
}
