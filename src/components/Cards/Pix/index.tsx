import { Icons, Images } from "../../../img/images";
import { Banner, BotaoEnviar, Container } from "./style";

const Pix: React.FC = () => {
    return (
        <Container>
            <Banner src={Images.pixLogo} alt="Icone do Pix" />
            <BotaoEnviar>
                <img src={Icons.envie} alt="enviar icon" />
                <p>Envie por CPF/CNPJ, telefone, e-mail ou chave aleatória</p>
            </BotaoEnviar>
            <BotaoEnviar>
                <img src={Icons.insira} alt="inserir icon" />
                <p>
                    Insira um código Pix Copia e Cola para enviar um pagamento
                </p>
            </BotaoEnviar>
        </Container>
    );
};

export default Pix;
