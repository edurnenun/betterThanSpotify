import { IonContent } from '@ionic/react';
import useAuth from './useAuth';

interface ContainerProps {code?:string }

const Dashboard: React.FC<ContainerProps> =  ({code}) => {
  const accessToken = useAuth(code)
  return <IonContent>{code}</IonContent>

}

export default Dashboard;


