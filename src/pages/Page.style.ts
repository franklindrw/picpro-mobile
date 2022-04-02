import styled from 'styled-components';

export const Logo = styled.h1`
    display: flex;
    border-bottom: 1px solid #fff;
    
    img{
        width: 6.5rem;
        margin:12px;
    }
    
    img:first-child{
        border-right: 1px solid #fff;
    }

    img:last-child{
        margin: 12px 0;
    }
`