import './Login.css';
import { IonButton, IonContent } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> =  () => (
    <IonContent>
        <IonButton href={'http://localhost:3001/login'} color="success" size="large">Login with Spotify</IonButton>
    </IonContent>

);

export default ExploreContainer;