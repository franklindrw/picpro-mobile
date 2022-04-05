import {
    IonContent,
    IonHeader,
    IonFooter,
    IonPage,
    IonToolbar,
} from "@ionic/react";
import MenuInferior from "../components/Menu-inferior/MenuInferior";
import Menu from "../components/menu/menu";

import Usuario from "../components/Usuario/usuario";
import { Logo } from "./Page.style";

const picproLogo = require("../img/picpro.png");
const kenzieLogo = require("../img/logo-kenzie.png");

const Page: React.FC = () => {
    return (
        <IonPage>
            <IonHeader class="ion-no-border">
                <IonToolbar color="primary">
                    <Logo>
                        <img src={picproLogo} alt="teste" />
                        <img src={kenzieLogo} alt="teste" />
                    </Logo>
                </IonToolbar>
            </IonHeader>

            <IonContent color="primary">
                <Usuario />
                <Menu />
            </IonContent>

            <IonFooter>
                <MenuInferior />
            </IonFooter>
        </IonPage>
    );
};

export default Page;
