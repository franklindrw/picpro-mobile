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
`;

export const Banner = styled.img`
    width: 50%;
    margin: 20px;
`;

export const BotaoEnviar = styled.button`
    border: 1px solid #c3c3c3;
    border-radius: 12px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px 15px;

    img {
        width: 15%;
    }

    p {
        width: 80%;
        text-align: left;
        font-size: 0.8rem;
    }
`;
