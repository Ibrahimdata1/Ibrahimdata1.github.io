import styled from "styled-components";

export const MenuBar = styled.div`
    background-color: black;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 10px;
    position: absolute;
    top: 50px;
`
export const Tab = styled.div`
    color: white;
    font-size: large;
    &:hover{
        cursor: pointer;
        color: gray;
    }
`