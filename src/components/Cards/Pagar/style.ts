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

export const InserirCodigo = styled.input`
    background-color: #fdfdfd;
    border: 1px solid #c3c3c3;
    border-radius: 8px;
    width: 100%;
    padding: 10px 25px;
`;