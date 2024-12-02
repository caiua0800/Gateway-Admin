import styled from "styled-components";

export const ClientPlataformContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 100px 30px 20px 30px;
    background: rgba(50, 50, 50, 0.05);
    position: relative;
`;

export const Title = styled.h1`
    margin: 0;
    color: rgba(0,0,0,0.5);
    margin-top: 20px;
`;

export const FirstGrid = styled.div`
    width: 100%;
    // height: 250px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    gap: 20px;
    box-sizing: border-box;
`;

export const SecondGrid = styled.div`
    width: 100%;
    // height: 250px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(30, 30, 30, 0.4);
`;

export const GridBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;

    .title{
        width: 100%;
        margin: 0;
        font-size: 28px;
        font-weight: 600;
    }

    .numberValue{
        width: 100%;
        margin: 0;
        font-size: 62px;
        font-weight: 800;
        color: rgba(0, 100, 200, 1);
    }

    .numberValue2{
        width: 100%;
        margin: 0;
        font-size: 52px;
        font-weight: 800;
        color: rgba(0, 100, 200, 1);
    }

    .titleBar{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 16px;
        color: rgba(0,0,0,0.5);
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
        width: ${props => props.filled ? `${props.filled}%` : '0'}; 
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
`;

export const Grids = styled.div`
    width: 100%;
    display: grid;
    margin-top: 40px;
    grid-template-columns: 1fr 1fr 1fr;
`;


export const GridBoxGeral = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;

    .title{
        width: 100%;
        margin: 0;
        font-size: 22px;
        font-weight: 600;
    }

    .titleMinor{
        width: 100%;
        margin: 0;
        font-size: 18px;
        font-weight: 600;
    }

    .numberValue{
        width: 100%;
        margin: 0;
        font-size: 38px;
        font-weight: 800;
        // color: rgba(0, 100, 200, 1);
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    .numberValueMinor{
        width: 100%;
        margin: 0;
        font-size: 28px;
        font-weight: 800;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    .green{
        color: green;
    }

    .red{
        color: red;
    }

    .blue{
        color: rgba(0, 100, 200, 1);
    }
`;

export const ThirdGrid = styled.div`
    width: 100%;
    // height: 250px;
    display: grid;
    grid-template-columns: 4fr 1fr 4fr 4fr;
    margin-top: 20px;
    gap: 20px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;

    .setaBox{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .setaDescription{
            text-align: center;
            font-size: 10px;
            width: max-content;
            font-weight: 500;
        }

        .seta{
            width: 60px;
        }
    }
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

// export const nome = styled.div``;

// export const nome = styled.div``;

// export const nome = styled.div``;

