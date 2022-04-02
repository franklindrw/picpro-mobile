import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Usuario from "../components/Usuario/usuario";
import "./page.module.scss";

const picproLogo = require("../img/picpro.png");
const kenzieLogo = require("../img/logo-kenzie.png");

const Page: React.FC = () => {
    return (
        <IonPage>
            <IonContent color="primary">
                <IonHeader class="ion-no-border teste">
                    <IonToolbar color="primary">
                        <div>
                            <img src={picproLogo} alt="teste" />
                            <img src={kenzieLogo} alt="teste" />
                        </div>
                    </IonToolbar>
                </IonHeader>

                <Usuario />
                <ExploreContainer name="Hello world" />
            </IonContent>
        </IonPage>
    );
};

export default Page;
