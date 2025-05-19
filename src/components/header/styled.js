import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0.25em;

    input {
        border: 0.0625em solid #ccc;
        border-radius: 0.5em;
        width: 100%;
        height: 2.7em;
        padding: 0.5em;
        font-weight:300;
    }
        
    button {
        background-color:rgb(47, 116, 255);
        padding: 0.5em 1em;
        margin: 0 0.5em;
        border-radius: 0.5em;
        font-weight: bold;
        font-size: 1em;
    
        &:hover {
        background-color:rgb(19, 78, 187);
        border-shadow: 0.1875em 0.125em 0.625em rgba(0, 0, 0, 0.2);
        }

        span {
            font-weight: bold;
            color: #fff;
        }
    }


`;