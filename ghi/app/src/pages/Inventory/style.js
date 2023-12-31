import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1440px;
    margin: auto;
    background-color: #fff;
`;

export const InventoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    grid-auto-rows: 42vh;
    padding: 40px 32px;

    .section {
        border: 2px solid #5694f0;
        border-radius: 5px;
        background-color: #140d4f;
        padding: 1em;
        color: #dddfdf;
        overflow-y: scroll;
    }

    #one {
        grid-column: 1 / 2;
        grid-row: 1;
    }
    #two {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }
    /* Automobile Inventory LIST */
    #three {
        grid-column: 1/3;
        grid-row: 2 / 3;
    }
`;

export const ModalContainer = styled.div`
    padding: 32px 48px;
    position: absolute;
    background-color: #dddfdf;
    width: 15vw;
    top: 30vh;
    left: 40vw;
    display: flex;
    flex-direction: column;
    border: 2px solid #5694f0;
    border-radius: 4px;

    div {
        padding-left: 10px;
    }
    button {
        margin-top: 20px;
    }
    #buttons {
        display: flex;
        padding: 5px;
    }
`;
