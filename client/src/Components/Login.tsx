import './Login.css';
import { IonButton, IonContent } from '@ionic/react';

export default function LoginBtnContainer() { 
    return (
        <IonContent>
        <IonButton href={'http://localhost:3001/login'} color="success" size="large">Login with Spotify</IonButton>
    </IonContent>
    )
}

