import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

const picproLogo = require("../img/picpro.png");
const style = require("./page.module.scss");

const Page: React.FC = () => {
    return (
        <IonPage>
            <IonContent color="primary">
                <IonHeader class="ion-no-border">
                    <IonToolbar color="primary">
                        <img
                            src={picproLogo}
                            alt="teste"
                            className={style.logo}
                        />
                    </IonToolbar>
                </IonHeader>

                <ExploreContainer name="Hello world" />
            </IonContent>
        </IonPage>
    );
};

export default Page;
