import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 12px 12px 0 0;
    display: flex;
    flex-direction: column;
    height: 300px;
    margin-top: 20px;
    padding: 0 30px;

    p {
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 0.9rem;

        margin-top: 0;
    }
`;

export const BotaoCobrar = styled.button`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");

    background-color: #228664;
    border-radius: 6px;
    border: none;
    margin-bottom: 10px;
    padding: 15px;
    width: 100%;

    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    color: #fff;
`;

export const QRcode = styled.img`
    width: 40%;
    margin-top: 30px;
`;

export const Link = styled.a`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");

    color: #000;
    font-family: "Montserrat", sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
`;
