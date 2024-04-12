import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-color: #f7f7f7;

    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const Content = styled.div`
    width: 300px;
    background-color: #464646;
    border-radius: 10px;
    box-shadow: 0px 10px 10px #00000040;
    padding: 10px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1px;
    margin: 1px;
`
