import { IonAvatar, IonLabel } from "@ionic/react";
import {
    Botao,
    ContainerConta,
    ContainerUsuario,
    Name,
    Saldo,
} from "./usuario.style";

const nome = "franklindrw";
const presente = require("../../img/presente.png");
const chat = require("../../img/chat.png");
const visualizar = require("../../img/visualizar.png");

const Usuario: React.FC = () => {
    return (
        <>
            <ContainerUsuario>
                <IonAvatar>
                    <img
                        src="https://github.com/franklindrw.png"
                        alt="avatar"
                    />
                </IonAvatar>

                <IonLabel>
                    <Name>
                        <p>Olá,</p>
                        <p>@{nome}</p>
                    </Name>
                </IonLabel>

                <Botao>
                    <img src={presente} alt="icone de presente" />
                    <img src={chat} alt="icone de chat" />
                </Botao>
            </ContainerUsuario>

            <ContainerConta>
                <Saldo>
                    <p>Saldo PicPay</p>
                    <p>
                        R$ 0,00{" "}
                        <span>
                            <img src={visualizar} alt="vizualizar saldo" />
                        </span>
                    </p>
                </Saldo>

                <button>Extrato</button>
            </ContainerConta>
        </>
    );
};

export default Usuario;
