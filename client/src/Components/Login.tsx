import './Login.css';
import { IonButton, IonContent } from '@ionic/react';
require('dotenv')

const AUTH_URL="https://accounts.spotify.com/authorize?client_id=ee2f9df1177b4f1ab271c635c6bf1219&response_type=code&redirect_uri=http://localhost:3000& scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> =  () => (
    <IonContent>
        <IonButton href={AUTH_URL} color="success" size="large">Login with Spotify</IonButton>
    </IonContent>

);

export default ExploreContainer;