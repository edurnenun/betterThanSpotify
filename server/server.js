/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv');
const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:8100',
    clientId: 'ee2f9df1177b4f1ab271c635c6bf1219',
    clientSecret: ' eae6a687fcce4d87b42c50399b924ba8',
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});
app.get('/login', (req, res) => {
  res.redirect(
    'https://accounts.spotify.com/authorize?client_id=ee2f9df1177b4f1ab271c635c6bf1219&response_type=code&redirect_uri=http://localhost:8100& scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state',
  );
});

app.post('/code', (req, res) => {
  const code = req.body.code;
  console.dir(req.body);

  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:8100',
    clientId: 'ee2f9df1177b4f1ab271c635c6bf1219',
    clientSecret: ' eae6a687fcce4d87b42c50399b924ba8',
  });
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.acces_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

const server = http.createServer(app);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
