import React from 'react';
import { IonContent, IonImg, IonItemDivider } from '@ionic/react';

export default function TrackSearchResults({track, chooseTrack}:any) {
    function handlePlay(){
        console.dir(track)
        chooseTrack(track)
    }
    return (
        <IonContent onClick={handlePlay} style={{
            //revisar estilo
            width: "50%",
            minWidth: "17.5rem",alignItems: "center",
            marginTop: "0.6rem",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "0.3rem",
            boxShadow: "0px 0px 4px #2a213f",}}>
            <IonImg src={track.albumUrl} style={{ height: "64px", width: "64px", borderRadius: "50px",
            marginRight: "0.5rem"}} alt="Artist image"/>
           <IonItemDivider>{track.title} </IonItemDivider> 
           <IonItemDivider>{track.artist} </IonItemDivider> 
        </IonContent>
    )
}