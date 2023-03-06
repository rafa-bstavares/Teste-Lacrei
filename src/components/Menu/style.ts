import styled from "styled-components";

export const ContainerMenu = styled.div`
    width: 32.7rem;
    display: flex;
    justify-content: space-between;
    height: 100%;
`

export const MenuItem = styled.div`
    display: flex;
    align-items: center; 
    font-weight: 700;
    font-size: 1.6rem;
    cursor: pointer;
    height: 100%;
    color: #000;
    &:hover{
        color: #018762;
    }
`