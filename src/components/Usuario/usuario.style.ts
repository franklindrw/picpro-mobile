import styled from "styled-components";

export const ContainerUsuario = styled.h1`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 35px 30px 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #1f6f54;
`;

export const Name = styled.p`
    p {
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");

        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
        margin-left: 10px;
        color: #fff;
    }

    p:last-child {
        font-weight: 700;
    }
`;

export const Botao = styled.h1`
    display: flex;
    justify-content: flex-end;

    img {
        height: 1.5rem;
        margin-left: 2rem;
    }
`;

export const ContainerConta = styled.h1`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 30px;

    button {
        background-color: #fff;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        padding: 10px 40px;
        border-radius: 8px;
    }
`;

export const Saldo = styled.p`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");
    font-family: "Montserrat", sans-serif;

    p:first-child {
        color: #fff;
        font-weight: 300;
        font-size: 1.1rem;
        margin: 0;
    }

    p {
        color: #fff;
        font-size: 1.2rem;
        margin: 0;
    }

    p span img {
        height: 1rem;
        margin-left: 5px;
    }
`;
