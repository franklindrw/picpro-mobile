import { IonCard, IonCardTitle, IonContent, IonImg } from "@ionic/react";

const iconQRCode = require("../../img/qrcode.png");
const iconPix = require("../../img/pix.png");
const iconPagar = require("../../img/codigo.png");
const iconCobrar = require("../../img/cobrar-icon.png");

const Menu: React.FC = () => {
    return (
        <IonContent>
            <IonCard>
                <IonImg src={iconQRCode} alt="icone QR Code"></IonImg>
                <IonCardTitle>QR Code</IonCardTitle>
            </IonCard>
            <IonCard>
                <IonImg src={iconPix} alt="icone Pix"></IonImg>
                <IonCardTitle>Pix</IonCardTitle>
            </IonCard>
            <IonCard>
                <IonImg src={iconPagar} alt="icone Pagar Boleto"></IonImg>
                <IonCardTitle>Pagar Boleto</IonCardTitle>
            </IonCard>
            <IonCard>
                <IonImg src={iconCobrar} alt="icone Cobrar"></IonImg>
                <IonCardTitle>Cobrar</IonCardTitle>
            </IonCard>
        </IonContent>
    );
};

export default Menu;
