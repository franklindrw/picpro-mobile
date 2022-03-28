import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Page: React.FC = () => {

  return (
    <IonPage >
      <IonContent color="primary">
        <IonHeader class="ion-no-border">
          <IonToolbar color="primary">
            <p>teste</p>
            <img src="../img/picpro.png" alt="" />
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name="Hello world" />
      </IonContent>
    </IonPage>
  );
};

export default Page;
