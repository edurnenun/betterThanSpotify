import { Controller, Get, Redirect } from '@nestjs/common'; // No olvidar importar Get

@Controller('login')
export class LoginController {
  @Get()
  @Redirect()
  loginRedirect() {
    return {
      url: 'https://accounts.spotify.com/authorize?client_id=ee2f9df1177b4f1ab271c635c6bf1219&response_type=code&redirect_uri=http://localhost:8100&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state',
    };
  }
}
