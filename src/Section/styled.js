import styled from "styled-components";

export const SectionContainer = styled.section`
    margin: 10px 0;
    background-color: #ffffff;
    box-shadow: 0 0 5px #dddddd;
`;

export const SectionHeader = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid rgba(179, 174, 174, 0.742);

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        padding: 5px;
    }
`;

export const SectionTitle = styled.h2`
    margin: 0;
    font-size: 20px;
`;

export const SectionList = styled.div`
    @media (max-width: 767px) {
        padding: 10px;
    }
`;