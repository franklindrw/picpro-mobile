import styled from "styled-components";

interface ContainerProps {
    backgroundColor: string;
    fontColor: string;
}

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 30px;
`;

export const MenuBotao = styled.button<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    background-color: ${(props) => props.backgroundColor};
    padding: 10px;
    border-radius: 10px;

    img {
        text-align: top;
        height: 18px;
    }

    p {
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");

        color: ${(props) => props.fontColor};
        text-align: left;
        width: 50px;
        font-size: 12px;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
    }
`;
