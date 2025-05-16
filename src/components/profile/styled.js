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
    height: 100%;
    margin-left: 0.9em;
`;

export const WrapperStatusCount = styled.div `
    display: flex;
    align-items: center;
`;

export const WrapperUsername = styled.div `
    display: flex;
    align-items: center;
    h3 {margin-right: 0.4em}
`;

export const WrapperImage = styled.img `
    border-radius: 50%;
    width: 12.5em;
    margin: 0.9em;
`;