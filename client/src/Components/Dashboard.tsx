import { IonContent } from '@ionic/react';

interface ContainerProps {code?:string }

const ExploreContainer: React.FC<ContainerProps> =  ({code}) => (
    <IonContent>
      {code}
    </IonContent>

);

export default ExploreContainer;