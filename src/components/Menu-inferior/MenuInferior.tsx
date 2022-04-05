import { ButtonBar, ContainerBar, Icone, Titulo } from "./MenuInferior.style";
import { Icons } from "../../img/images";

const MenuInferior: React.FC = () => {
    return (
        <ContainerBar>
            <ButtonBar>
                <Icone src={Icons.homePreto} alt="" />
                <Titulo>Inicio</Titulo>
            </ButtonBar>

            <ButtonBar>
                <Icone src={Icons.carteiraPreto} alt="" />
                <Titulo>Carteira</Titulo>
            </ButtonBar>

            <ButtonBar>
                <Icone src={Icons.pagar} alt="" className="pagarIcon" />
                <Titulo>Pagar</Titulo>
            </ButtonBar>

            <ButtonBar>
                <Icone src={Icons.notificacaoPreto} alt="" />
                <Titulo>Notificações</Titulo>
            </ButtonBar>

            <ButtonBar>
                <Icone src={Icons.bolsaPreto} alt="" />
                <Titulo>Store</Titulo>
            </ButtonBar>
        </ContainerBar>
    );
};

export default MenuInferior;
