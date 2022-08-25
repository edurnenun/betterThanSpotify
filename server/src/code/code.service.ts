import { Injectable } from '@nestjs/common';
import * as SpotifyWebApi from 'spotify-web-api-node';
import CodeDto from './code.dto';

@Injectable()
export class CodeService {
  authorizeCode(codeDto: CodeDto) {
    const code = codeDto.code;

    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    });

    return spotifyApi
      .authorizationCodeGrant(code)
      .then((data) => {
        return {
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        };
      })
      .catch((err) => {
        throw err;
      });
  }
}
