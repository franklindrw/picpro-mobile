import styled from "styled-components";

export const Logo = styled.h1`
    display: flex;
    border-bottom: 1px solid #fff;
    margin: 0;

    img {
        height: 1.5rem;
        margin: 1rem;
    }

    img:first-child {
        border-right: 1px solid #fff;
    }

    img:last-child {
        margin: 1rem 0;
    }
`;
