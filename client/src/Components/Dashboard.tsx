import React, { useState, useEffect } from 'react';
import { IonContent, IonSearchbar } from '@ionic/react';
import useAuth from './useAuth';
import SpotifyWebApi from 'spotify-web-api-node';
import TrackSearchResults from './TrackSearchResult';

const spotifyWebApi = new SpotifyWebApi({clientId: 'ee2f9df1177b4f1ab271c635c6bf1219',})

interface ContainerProps {code?:string }
interface SearchbarChangeEventDetail {
  value?: string;
}

const Dashboard: React.FC<ContainerProps> =  ({code}) => {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<any>([]);

  useEffect(() => {
    if (!accessToken) return
    spotifyWebApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return
    console.dir({accessToken, search})
    spotifyWebApi.setAccessToken(accessToken)

    let cancel =false
    spotifyWebApi.searchTracks(search).then(res => {
      console.dir({data:res.body.tracks})
      if (cancel) return
      setSearchResults(res.body.tracks?.items.map(track => {
        const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
          if (image.height??0 < (smallest?.height ?? 99999999)) return image 
          return smallest
        }, track.album.images[0])

        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: smallestAlbumImage.url
        }
      }))
    }).catch((err) => {
      console.dir({ohno:err})
    })
    return (() => (cancel = true)) as any
  }, [search, accessToken])

  return <IonContent>
  
  <IonSearchbar value={search} onIonChange={e => setSearch(e.target.value!)} placeholder="Search songs/artist"></IonSearchbar>
  <IonContent>{searchResults.map((track:any) => (
    <TrackSearchResults track={track} key={track.uri}></TrackSearchResults>
  ))}</IonContent>
  </IonContent>

}



export default Dashboard;


