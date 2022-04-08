import { Icons } from "../../../img/images";
import {
    Banner,
    BotaoAmigos,
    Container,
    Title,
    Text,
    TextBotton,
} from "./style";

const Cobrar: React.FC = () => {
    return (
        <Container>
            <Banner src={Icons.cobrar} alt="Icone do Pix" />
            <Title>Cobrar</Title>
            <Text>Divida a conta com os amigos de forma fácil!</Text>
            <BotaoAmigos>
                <img src={Icons.picpay} alt="enviar icon" />
                <TextBotton>
                    <h5>Amigos no PicPay</h5>
                    <p>Divida e acompanhe um gasto com pessoas por aqui</p>
                </TextBotton>
            </BotaoAmigos>
        </Container>
    );
};

export default Cobrar;
