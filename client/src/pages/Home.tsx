import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Login from "../Components/Login";
import Dashboard from '../Components/Dashboard'

const code = new URLSearchParams(window.location.search).get('code')

function App(){
  return code ? <Dashboard code={code} /> : <Login />
}

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Login></Login>
      </IonContent>
    </IonPage>
  );
};

export default Home;