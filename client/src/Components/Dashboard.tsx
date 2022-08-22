import { IonContent } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> =  ({code}) => (
    <IonContent>
      {code}
    </IonContent>

);

export default ExploreContainer;