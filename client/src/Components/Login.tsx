
import './Login.css';
import { IonButton, IonContent } from '@ionic/react';

//Falta configurar .env
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> =  () => (
    <IonContent>
        <IonButton href={AUTH_URL} color="success" size="large">Login with Spotify</IonButton>
    </IonContent>

);

export default ExploreContainer;

/*
export function Login(){
    return(
        <IonButton>Login</IonButton>
    )
}
*/