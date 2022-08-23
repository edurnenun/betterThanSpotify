import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Login from "../Components/Login";
import Dashboard from '../Components/Dashboard'

const code = new URLSearchParams(window.location.search).get('code') ?? undefined

console.dir({code})

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
            {code ? <Dashboard code={code} /> : <Login />}
      </IonContent>
    </IonPage>
  );
};

export default Home;