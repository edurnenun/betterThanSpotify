import React, { useState } from 'react';
import { IonContent, IonSearchbar } from '@ionic/react';
import useAuth from './useAuth';



interface ContainerProps {code?:string }
interface SearchbarChangeEventDetail {
  value?: string;
}

const Dashboard: React.FC<ContainerProps> =  ({code}) => {
  const [searchText, setSearchText] = useState('');
  const accessToken = useAuth(code)
  return <IonContent>{code}<p>Searchbar with a placeholder</p>
  
  <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="Filter Schedules"></IonSearchbar>
  </IonContent>

}



export default Dashboard;


