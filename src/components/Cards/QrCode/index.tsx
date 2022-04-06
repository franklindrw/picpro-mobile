import { Images } from "../../../img/images";
import { QRcode, Container, BotaoCobrar, Link } from "./style";

const QrCode: React.FC = () => {
    return (
        <Container>
            <QRcode src={Images.qrCode} alt="Banner PicPay" />
            <p>@franklindrw</p>
            <BotaoCobrar>Cobre um amigo</BotaoCobrar>
            <Link href="#">Compartilhar meu código</Link>
        </Container>
    );
};

export default QrCode;
