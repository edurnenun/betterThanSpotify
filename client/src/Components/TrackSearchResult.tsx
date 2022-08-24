import React from 'react';
import { IonContent, IonImg, IonItemDivider } from '@ionic/react';

export default function TrackSearchResults({track, chooseTrack}:any) {
    function handlePlay(){
        chooseTrack(track)
    }
    return (
        <IonContent onClick={handlePlay}>
            <IonImg src={track.albumUrl} style={{ height: "64px", width: "64px"}} />
           <IonItemDivider>{track.title} </IonItemDivider> 
           <IonItemDivider>{track.artist} </IonItemDivider> 
        </IonContent>
    )
}