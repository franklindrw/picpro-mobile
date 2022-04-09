import { useState } from "react";
import Cobrar from "../Cards/Cobrar";
import Inicio from "../Cards/Inicio";
import Pagar from "../Cards/Pagar";
import Pix from "../Cards/Pix";
import QrCode from "../Cards/QrCode";
import { MenuBotao, MenuContainer } from "./main.style";

const iconQRCode = require("../../img/qrcode.png");
const iconPix = require("../../img/pix.png");
const iconPagar = require("../../img/codigo.png");
const iconCobrar = require("../../img/cobrar-icon.png");

const Main: React.FC = () => {
    const [active, setActive] = useState("Inicio");

    return (
        <>
            <MenuContainer>
                <MenuBotao onClick={() => setActive("QrCode")}>
                    <img src={iconQRCode} alt="icone QR Code"></img>
                    <p>QR Code</p>
                </MenuBotao>

                <MenuBotao onClick={() => setActive("Pix")}>
                    <img src={iconPix} alt="icone Pix"></img>
                    <p>Pix</p>
                </MenuBotao>

                <MenuBotao onClick={() => setActive("Pagar")}>
                    <img src={iconPagar} alt="icone Pagar Boleto"></img>
                    <p>Pagar Boleto</p>
                </MenuBotao>

                <MenuBotao onClick={() => setActive("Cobrar")}>
                    <img src={iconCobrar} alt="icone Cobrar"></img>
                    <p>Cobrar</p>
                </MenuBotao>
            </MenuContainer>

            {active === "Inicio" && <Inicio />}
            {active === "QrCode" && <QrCode /> }
            {active === "Pix" && <Pix /> }
            {active === "Pagar" && <Pagar /> }
            {active === "Cobrar" && <Cobrar /> }
        </>
    );
};

export default Main;
