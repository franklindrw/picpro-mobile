import Inicio from "../Cards/Inicio";
import Pix from "../Cards/Pix";
import QrCode from "../Cards/QrCode";
import { MenuBotao, MenuContainer } from "./main.style";

const iconQRCode = require("../../img/qrcode.png");
const iconPix = require("../../img/pix.png");
const iconPagar = require("../../img/codigo.png");
const iconCobrar = require("../../img/cobrar-icon.png");

const Main: React.FC = () => {
    return (
        <>
            <MenuContainer>
                <MenuBotao>
                    <img src={iconQRCode} alt="icone QR Code"></img>
                    <p>QR Code</p>
                </MenuBotao>

                <MenuBotao>
                    <img src={iconPix} alt="icone Pix"></img>
                    <p>Pix</p>
                </MenuBotao>

                <MenuBotao>
                    <img src={iconPagar} alt="icone Pagar Boleto"></img>
                    <p>Pagar Boleto</p>
                </MenuBotao>

                <MenuBotao>
                    <img src={iconCobrar} alt="icone Cobrar"></img>
                    <p>Cobrar</p>
                </MenuBotao>
            </MenuContainer>

            <Pix />
        </>
    );
};

export default Main;
