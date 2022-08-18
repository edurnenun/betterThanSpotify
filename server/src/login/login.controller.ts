import { Controller, Get } from '@nestjs/common'; // No olvidar importar Get
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  findAll() {
    //url http://localhost:3001/api/v1/login
    return this.loginService.findAll();
  }
}
