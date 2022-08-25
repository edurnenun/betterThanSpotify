import './Login.css';
import { IonButton, IonContent, IonGrid, IonRow } from '@ionic/react';

export default function LoginBtnContainer() { 
    return (
        <IonContent>
            <IonGrid>
                <IonRow class="ion-justify-content-center ion-align-items-center">
                <IonButton href={'https://betterthanspotify.herokuapp.com/login'} color="success" size="large" className="login-button">Login with Spotify</IonButton>
                </IonRow>
            </IonGrid>
        
    </IonContent>
    )
}

