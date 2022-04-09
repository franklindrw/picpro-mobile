import { useState } from "react";
import Cobrar from "../Cards/Cobrar";
import Inicio from "../Cards/Inicio";
import Pagar from "../Cards/Pagar";
import Pix from "../Cards/Pix";
import QrCode from "../Cards/QrCode";
import { MenuBotao, MenuContainer } from "./main.style";
import { Icons } from "../../img/images";

interface ButtonProps {
    backgroundColor?: string;
    fontColor?: string;
}

const Main: React.FC<ButtonProps> = () => {
    const [card, setCard] = useState("Inicio");

    return (
        <>
            <MenuContainer>
                <MenuBotao
                    onClick={() => setCard("QrCode")}
                    backgroundColor={card === "QrCode" ? "#fff" : "#1f6f54"}
                    fontColor={card === "QrCode" ? "#000" : "#fff"}
                >
                    <img
                        src={
                            card === "QrCode"
                                ? Icons.iconQRCodeVerde
                                : Icons.iconQRCode
                        }
                        alt="icone QR Code"
                    ></img>
                    <p>QR Code</p>
                </MenuBotao>

                <MenuBotao
                    onClick={() => setCard("Pix")}
                    backgroundColor={card === "Pix" ? "#fff" : "#1f6f54"}
                    fontColor={card === "Pix" ? "#000" : "#fff"}
                >
                    <img
                        src={card === "Pix" ? Icons.pixVerde : Icons.iconPix}
                        alt="icone Pix"
                    ></img>
                    <p>Pix</p>
                </MenuBotao>

                <MenuBotao
                    onClick={() => setCard("Pagar")}
                    backgroundColor={card === "Pagar" ? "#fff" : "#1f6f54"}
                    fontColor={card === "Pagar" ? "#000" : "#fff"}
                >
                    <img
                        src={
                            card === "Pagar"
                                ? Icons.iconPagarVerde
                                : Icons.iconPagar
                        }
                        alt="icone Pagar Boleto"
                    ></img>
                    <p>Pagar Boleto</p>
                </MenuBotao>

                <MenuBotao
                    onClick={() => setCard("Cobrar")}
                    backgroundColor={card === "Cobrar" ? "#fff" : "#1f6f54"}
                    fontColor={card === "Cobrar" ? "#000" : "#fff"}
                >
                    <img
                        src={
                            card === "Cobrar"
                                ? Icons.iconCobrarVerde
                                : Icons.iconCobrar
                        }
                        alt="icone Cobrar"
                    ></img>
                    <p>Cobrar</p>
                </MenuBotao>
            </MenuContainer>

            {card === "Inicio" && <Inicio />}
            {card === "QrCode" && <QrCode />}
            {card === "Pix" && <Pix />}
            {card === "Pagar" && <Pagar />}
            {card === "Cobrar" && <Cobrar />}
        </>
    );
};

export default Main;
