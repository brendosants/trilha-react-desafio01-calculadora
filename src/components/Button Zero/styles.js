import styled from 'styled-components';

export const ButtonZeroContainer = styled.button`
   
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    color: #fff;
    background-color: #747474;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    border:none;
    outline:none;
    cursor: pointer;
    grid-column: span 2;
    border-radius: 40px;
    
    &:hover {
        opacity: 0.6;
    }
`