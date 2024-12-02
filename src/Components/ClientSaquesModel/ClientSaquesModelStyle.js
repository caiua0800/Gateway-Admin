import styled from "styled-components";

export const ClientSaquesModelContent = styled.div`
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

export const SelecionarTipo = styled.div`
    margin-top: 20px;
    display: grid;
    width: 100%;
    box-sizing: border-box;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    .padrao{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        height: 30px;
        cursor: pointer;
    }

    .selected{
        background: rgba(190, 190, 190, 1);
    }

    .divTipo{
        border-bottom: 3px solid rgba(190, 190, 190, 1);
    }
`;

export const TabelaDeSaques = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    gap: 2px;
`;

export const Tabela = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-radius: 8px;
    overflow: hidden;  // Para cantos arredondados
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

export const Th = styled.th`
    background-color: #f7f7f7;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    padding: 12px 15px;
    font-weight: bold;
    border-bottom: 2px solid #ccc;

`;

export const Td = styled.td`
    background-color: #fff;
    padding: 12px 15px;
    border-bottom: 1px solid #ccc;  // Linha inferior entre as linhas
    color: rgba(0, 0, 0, 0.8);
    transition: .3s;
    cursor: pointer;
    &:hover{
        background: rgba(40, 40, 40, 0.4);
    }
`;

export const Loading = styled.div`
    padding: 20px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.5);
`;


// export const nome = styled.div``;

// export const nome = styled.div``;

// export const nome = styled.div``;

// export const nome = styled.div``;

// export const nome = styled.div``;
