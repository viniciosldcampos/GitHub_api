import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    align-items: flex-start;
`;

export const WrapperInfoUser = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 13em;
    margin-left: 0.9em;
    
    h1 {
        font-size: 2em;
        font-weight: bold;
    }

    h3 {
        font-size: 1.1em;
        font-weight: bold;
    }
    
    h4 {
        font-size: 1em;
        font-weight: bold;
    }
`;

export const WrapperStatusCount = styled.div `
    display: flex;
    align-items: center;
    
    div {
        margin: 0.4em;
        text-align: center;
    }
`;

export const WrapperUserGeneric = styled.div `
    display: flex;
    align-items: center;
    margin-top: 0.5em;

    h3 {
        margin-right: 0.5em
    }

    a {
        font-size: 1.1em;
        color: blue;
        font-weight: bold;
    }
    `;

export const WrapperImage = styled.img `
    border-radius: 50%;
    width: 12.5em;
    margin: 0.9em;
`;