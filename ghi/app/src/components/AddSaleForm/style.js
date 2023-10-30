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

    #search-row {
        display: flex;
        /* justify-content: flex-start; */
        padding: 0, 12px;

    }


`;

export const TechDetails = styled.div`
    display: flex;
    justify-content: space-around;
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
