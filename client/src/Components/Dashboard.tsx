import React, { useState, useEffect } from "react";
import { IonContent, IonSearchbar, IonItemDivider } from "@ionic/react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResults from "./TrackSearchResult";
import Player from "../Components/Player";
import axios from "axios";

const spotifyWebApi = new SpotifyWebApi({
  clientId: "ee2f9df1177b4f1ab271c635c6bf1219",
});

interface ContainerProps {
  code?: string;
}

const Dashboard: React.FC<ContainerProps> = ({ code }) => {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [playingTrack, setplayingTrack] = useState<any>();
  const [lyrics, setLyrics] = useState("");

  console.dir(searchResults);

  function chooseTrack(track: any) {
    setplayingTrack(track);
    setSearch("");
    setLyrics("");
  }

  useEffect(() => {
    if (!playingTrack) return;

    axios
      .get("http://localhost:3001/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then((res) => {
        setLyrics(res.data.lyrics);
      });
  }, [playingTrack]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyWebApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;

    spotifyWebApi.setAccessToken(accessToken);

    spotifyWebApi
      .searchTracks(search)
      .then((res) => {
        console.dir({ data: res.body.tracks });
        if (cancel) return;
        setSearchResults(
          res.body.tracks?.items.map((track) => {
            const smallestAlbumImage = track.album.images.reduce(
              (smallest, image) => {
                if (image.height ?? 0 < (smallest?.height ?? 99999999))
                  return image;
                return smallest;
              },
              track.album.images[0]
            );

            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: smallestAlbumImage.url,
            };
          })
        );
      })
      .catch((err) => {
        console.dir({ err });
      });
    return (() => (cancel = true)) as any;
  }, [search, accessToken]);

  return (
    <IonContent style={{ zIndex: 4 }}>
      <IonSearchbar
        value={search}
        onIonChange={(e) => setSearch(e.detail.value!)}
        placeholder="Search songs/artist"
      ></IonSearchbar>
      <IonContent>
        {searchResults.map((track: any) => (
          <TrackSearchResults
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          ></TrackSearchResults>
        ))}
        {searchResults.length === 0 && (
          <IonItemDivider style={{ whiteSpace: "pre" }}>
            {lyrics}
          </IonItemDivider>
        )}
      </IonContent>
      <IonContent>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri}></Player>
      </IonContent>
    </IonContent>
  );
};

export default Dashboard;
