import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    color: #140d4f;
    padding: 12px 24px;
    border-radius: 4px;
    border: 2px solid #dddfdf;

    h1 {
        margin: 8px;
    }

    #buttonBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;


export const SalespersonFilter = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    padding-left: 10px;
    grid-template-rows: repeat(auto-fill, auto);
    grid-row-gap: 0.5em;
    grid-column-gap: 1em;
`


export const TechDetails = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 8px;
    /* Gray */
    border: 1px solid #dddfdf;
    border-radius: 4px;
    margin: 10px 0;
    font-weight: 500;

    button {
        border: none;
        background-color: #fff;
        color: red;
        cursor: pointer;
    }

    td, th {
        padding-right: 5rem;
    }

`;
