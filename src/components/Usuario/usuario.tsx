import { IonAvatar, IonItem, IonLabel } from "@ionic/react";

const nome = "franklindrw";
const presente = require("../../img/presente.png");
const chat = require("../../img/chat.png");

const Usuario: React.FC = () => {
    return (
        <>
            <IonItem lines="none" color="primary">
                <IonAvatar>
                    <img
                        src="https://github.com/franklindrw.png"
                        alt="avatar"
                    />
                </IonAvatar>

                <IonLabel>
                    <p>Olá,</p>
                    <p>@{nome}</p>
                </IonLabel>

                <IonLabel>
                    <img src={presente} alt="icone de presente" />
                    <img src={chat} alt="icone de chat" />
                </IonLabel>
            </IonItem>
        </>
    );
};

export default Usuario;
