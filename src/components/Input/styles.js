import styled from 'styled-components';

export const InputContainer = styled.div`
    widht: 100%;
    height: 75px;
    background-color: #464646;
    
    
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 10px;

    font-size: 24px;
    font-family: "Helvetica Neue", sans-serif;

    input {
        width: 100%;
        padding: 20px
        height: 75px;
        background-color: #464646;
        text-align: right;
        border: 0;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 2.5rem;
        color: #fff;
        background-color: #747474;

        padding-block-start: 0.25rem;
        padding-block-end: 0.25rem;
        padding-inline-end: 0.75rem;
    }
`