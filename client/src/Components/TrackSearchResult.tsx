import React from 'react';
import { IonContent, IonImg, IonItemDivider } from '@ionic/react';

export default function TrackSearchResults({track, chooseTrack}:any) {
    function handlePlay(){
        console.dir(track)
        chooseTrack(track)
    }
    return (
        <IonContent onClick={handlePlay} class="ion-justify-content-center ion-align-items-center">
            <IonImg src={track.albumUrl} style={{ height: "64px", width: "64px", borderRadius: "50px",
            marginRight: "0.5rem"}} alt="Artist image"/>
           <IonItemDivider>{track.title} </IonItemDivider> 
           <IonItemDivider>{track.artist} </IonItemDivider> 
        </IonContent>
    )
}