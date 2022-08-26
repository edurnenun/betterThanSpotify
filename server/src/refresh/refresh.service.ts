import { Injectable } from '@nestjs/common';
import RefreshDto from './refresh.dto';
import * as SpotifyWebApi from 'spotify-web-api-node';

@Injectable()
export class RefreshService {
  async refreshToken(refreshDto: RefreshDto) {
    const refreshToken = refreshDto.refreshToken;
    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken,
    });

    return spotifyApi
      .refreshAccessToken()
      .then((data) => {
        return {
          accessToken: data.body.accessToken,
          expiresIn: data.body.expiresIn,
        };
      })
      .catch((err) => {
        throw err;
      });
  }
}
