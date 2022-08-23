import React from 'react';
import { IonContent, IonImg, IonItemDivider } from '@ionic/react';

export default function TrackSearchResults({track}:{track:any}) {
    console.dir({track})
    return (
        <IonContent>
            <IonImg src={track.albumUrl} style={{ height: "64px", width: "64px"}} />
           <IonItemDivider>{track.title} </IonItemDivider> 
           <IonItemDivider>{track.artist} </IonItemDivider> 
        </IonContent>
    )
}