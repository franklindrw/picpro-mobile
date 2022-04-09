import { Icons } from "../../../img/images";
import {
    Banner,
    Container,
    Title,
    Text,
    InserirCodigo
} from "./style";

const Pagar: React.FC = () => {
    return (
        <Container>
            <Banner src={Icons.boleto} alt="Boleto" />
            <Title>Pagar com código de Barras</Title>
            <Text>Você pode parcelar em até 12x no cartão ou usar seu saldo em carteira para pagar à vista</Text>
            <InserirCodigo type="number" placeholder="Insira código de Barras" />
        </Container>
    );
};

export default Pagar;
