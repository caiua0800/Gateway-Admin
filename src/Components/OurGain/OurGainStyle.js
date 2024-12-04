import styled from "styled-components";

export const ClientPlataformContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 100px 30px 20px 30px;
    background: rgba(50, 50, 50, 0.05);
    position: relative;
    overflow: auto;
`;

export const Title = styled.h1`
    margin: 0;
    color: rgba(0,0,0,0.5);
    margin-top: 20px;
`;

export const ReloadIcon = styled.img`
    position: absolute;
    top: 110px;
    left: 30px;
    transition: transform 0.6s ease, opacity 0.3s;
    width: 30px;
    height: 30px;
    opacity: 0.6;
    cursor: pointer;

    &:hover {
        opacity: 1;
        transform: scale(1.04);
        transform: rotate(360deg);

    }
`;

export const FrequencyChartContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    box-sizing: border-box;
    padding: 10px 30px;
    align-items: center;
    justify-content: center;
    
    .chart{
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 10px; 
    width: 100%;

    & > :nth-child(5),
    & > :nth-child(6) {
        grid-column: span 2; 
    }

    & > :nth-child(7),
    & > :nth-child(8),
    & > :nth-child(9) {
        grid-column: span 1;
    }
`;

export const Box = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 6px;
    box-shadow: 3px 3px 2px rgba(0,0,0,0.4);
    background: linear-gradient(120deg, rgba(10, 10, 10, 0.5), rgba(30, 30, 30, 0.05));
    box-sizing: border-box;
    padding: 20px 30px;
    display: grid;
    grid-template-rows: 2fr 4fr 2fr;
    grid-template-columns: auto;
    align-items: center;

    .title{
        width: 100%;
        display: flex;
        text-align: center;
        justify-content: center;
        color: rgba(50, 50, 50, 1);
        font-size: 26px;
        font-weight: 600;
    }

    .titleBoxDown{
        // width: 100%;
        display: flex;
        text-align: start;
        color: rgba(50, 50, 50, 1);
        font-size: 26px;
        font-weight: 600;
    }

    .amount{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .amountReal{
            font-size: 38px;
            // color: rgba(0, 240, 0, 1);
            color: yellow;
            font-weight: 800;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
            width: 100%;
            text-align: center;
        }

        .amountUsd{
            font-size: 22px;
            // margin-top: 10px;
            color: rgba(0, 30, 0, 1);
            font-weight: 800;
            text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
            width: 100%;
            text-align: center;
        }
    }

    .closeDay{
        font-size: 18px;
        color: rgba(30, 30, 30, 1);
        font-weight: 600;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
        width: 100%;
        text-align: center;
    }

    .barItem {
        .titleBar {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 16px;
            color: rgba(0, 0, 0, 0.5);
        }

        .percentegeBar {
            width: 100%;
            height: 20px; /* Altura da barra */
            background-color: white;
            border: 1px solid rgba(0, 0, 0, 0.1);
            position: relative;
            margin-top: 10px;
        }

        .filled {
            height: 100%;
            background-color: green;
            width: 0; /* Inicialmente, a largura é 0 */
        }

        .percentageText {
            position: absolute;
            right: 10px; /* Para ajustar a posição */
            top: 0;
            height: 100%;
            display: flex;
            align-items: center;
            color: black; /* Cor do texto da porcentagem */
            font-weight: bold;
        }
    }

`;

export const TableContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    .columns{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        border: 2px solid black;
        height: 30px;
        align-items: center;
        background: black;
        width: 100%;
        gap: 2px;
        box-sizing: border-box;

        .item{
            width: 100%;
            color: black;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            background: linear-gradient(120deg, rgba(200, 200, 200, 1), rgba(230, 230, 230, 1));
        }
    }

    .tableBody{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        max-height: 100%;
        overflow-y: auto;

        .rows{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            // height: 25px;
            align-items: center;
            background: black;
            width: 100%;
            gap: 2px;
            box-sizing: border-box;
            padding: 0 2px 2px 2px;

            .item{
                width: 100%;
                color: black;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(230, 230, 230, 1);
            }
        }
    }
`;

// export const nome = styled.div``;

// export const nome = styled.div``;

// export const nome = styled.div``;


