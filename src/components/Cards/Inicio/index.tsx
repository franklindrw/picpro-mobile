import { Images } from "../../../img/images";
import { Banner, Container, FormPagamento } from "./style";

const Inicio: React.FC = () => {
    return (
        <Container>
            <FormPagamento placeholder="Selecione a forma de pagamento" />
            <Banner src={Images.banner} alt="Banner PicPay" />
        </Container>
    );
};

export default Inicio;
