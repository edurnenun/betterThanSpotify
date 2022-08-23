import React, { useState, useEffect } from 'react';
import { IonContent, IonSearchbar } from '@ionic/react';
import useAuth from './useAuth';
import SpotifyWebApi from 'spotify-web-api-node';

const SpotifyWebApi = new SpotifyWebApi({
  clientId:'ee2f9df1177b4f1ab271c635c6bf1219',
})

interface ContainerProps {code?:string }
interface SearchbarChangeEventDetail {
  value?: string;
}

const Dashboard: React.FC<ContainerProps> =  ({code}) => {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  

  useEffect(() => {
    if(!accessToken) return
    SpotifyWebApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return
    SpotifyWebApi.searchTracks(search).then(res () => {
      res.body.tracks.items.map(track => {
        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: track.albumUrl.images
        }
      })
    })

  }, [search, accessToken])

  return <IonContent>{code}<p>Searchbar with a placeholder</p>
  
  <IonSearchbar value={search} onIonChange={e => setSearchText(e.target.value!)} placeholder="Search songs/artist"></IonSearchbar>
  <IonContent>Songs</IonContent>
  </IonContent>

}



export default Dashboard;


