import styled from "styled-components";

export const ContainerBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    border-top: 1px solid #c0c0c0;
`;

export const ButtonBar = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;

    .pagarIcon {
        margin-top: -30px;
        height: 50px;
    }
`;

export const Icone = styled.img`
    height: 20px;
`;

export const Titulo = styled.p`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");

    font-family: "Montserrat", sans-serif;
    font-size: 10px;
    margin-top: 5px;
`;
