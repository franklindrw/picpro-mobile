import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 12px 12px 0 0;
    display: flex;
    flex-direction: column;
    height: 310px;
    margin-top: 20px;
    padding: 0 30px;
`;

export const Banner = styled.img`
    width: 30%;
    margin-top: 20px;
`;

export const Title = styled.h4`
    margin: 0;
    font-weight: 700;
`;

export const Text = styled.p`
    font-size: 0.9rem;
`;

export const BotaoAmigos = styled.button`
    border: 1px solid #c3c3c3;
    border-radius: 12px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px 25px;

    img {
        width: 16%;
    }
`;

export const TextBotton = styled.div`
    text-align: left;
    margin-left: 25px;
    padding: 8px 0;

    h5 {
        font-size: 0.9rem;
        font-weight: 700;
        margin: 2px 0;
    }

    p {
        width: 90%;
        text-align: left;
        font-size: 0.8rem;
        margin: 0;
    }
`;
