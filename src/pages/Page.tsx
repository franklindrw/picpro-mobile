import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import Menu from "../components/menu/menu";

import Usuario from "../components/Usuario/usuario";
import { Logo } from "./Page.style";

const picproLogo = require("../img/picpro.png");
const kenzieLogo = require("../img/logo-kenzie.png");

const Page: React.FC = () => {
    return (
        <IonPage>
            <IonContent color="primary">
                <IonHeader class="ion-no-border teste">
                    <IonToolbar color="primary">
                        <Logo>
                            <img src={picproLogo} alt="teste" />
                            <img src={kenzieLogo} alt="teste" />
                        </Logo>
                    </IonToolbar>
                </IonHeader>

                <Usuario />
                <Menu />
            </IonContent>
        </IonPage>
    );
};

export default Page;
