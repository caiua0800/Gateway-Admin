import React, { useEffect, useState } from "react";
import * as S from "./ClientPlatformModelStyle";
import Loading from "../Loading/Loading";
import helpers from "../../helpers";

export default function ClientPlatformModel({ plataforma }) {
    const [plataformaData, setPlataformaData] = useState(null);
    const [loadStatus, setLoadStatus] = useState(false);
    const [erro, setErro] = useState(false);

    const fetchData = async () => {
        setLoadStatus(true); 
        let data = await helpers.getPlatformInfo(plataforma);
        if (data === null) {
            console.log("Nenhum dado retornado.");
            setErro(true);
        } else {
            setPlataformaData(data);
        }
        setTimeout(() => {
            setLoadStatus(false);
        },1200);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleReload = async () => {
        await fetchData();
    }

    if (erro) {
        return (
            <S.ClientPlataformContainer>
                <S.Title>ERRO AO OBTER DADOS</S.Title>
            </S.ClientPlataformContainer>
        );
    }

    // Use valores padrão para evitar acessar propriedades de null
    const totalClients = plataformaData?.totalClients || 0;
    const totalPurchasesActive = plataformaData?.totalPurchasesActive || 0;
    const totalAmountActivePurchases = plataformaData?.totalAmountActivePurchases || 0;
    const totalAmountPurchasesThisMonth = plataformaData?.totalAmountPurchasesThisMonth || 0;
    const totalAmountToWithdraw = plataformaData?.totalAmountToWithdraw || 0;
    const bankAccountValue = plataformaData?.bankAccountValue || 0;

    return (
        <S.ClientPlataformContainer>
            <Loading status={loadStatus} />
            <S.ReloadIcon onClick={handleReload} alt="reload" src="./icons/reload-icon.png" />
            <S.Title>ATIVIDADES DA PLATAFORMA</S.Title>
            <S.FirstGrid>
                <S.GridBox>
                    <h2 className="title">QTDE. CLIENTES</h2>
                    <span className="numberValue">{totalClients}</span>
                </S.GridBox>
                <S.GridBox>
                    <h2 className="title">CONTRATOS ATIVOS</h2>
                    <span className="numberValue">{totalPurchasesActive}</span>
                </S.GridBox>
            </S.FirstGrid>

            <S.SecondGrid>
                <S.GridBox filled={(100225 / totalAmountActivePurchases) * 100 || 0}>
                    <h2 className="title">VALOR DE ATIVOS</h2>
                    <p className="numberValue2">R${helpers.formatarNumero(totalAmountActivePurchases)}</p>
                    <span className="titleBar">VALOR NO BANCO</span>
                    <div className="percentegeBar">
                        <div filled={(100225 / totalAmountActivePurchases) * 100 || 0} className="filled"></div>
                        <div className="percentageText">{((100225 / totalAmountActivePurchases) * 100 || 0).toFixed(2)}%</div>
                    </div>
                </S.GridBox>
            </S.SecondGrid>

            <S.Grids>
                <S.GridBoxGeral>
                    <h2 className="title">COMPRAS ESSE MÊS</h2>
                    <span className="numberValue green">+ R${helpers.formatarNumero(totalAmountPurchasesThisMonth)}</span>
                </S.GridBoxGeral>
                <S.GridBoxGeral>
                    <h2 className="title">SAQUES À PAGAR ESSE MÊS</h2>
                    <span className="numberValue red">- R${helpers.formatarNumero(totalAmountToWithdraw)}</span>
                </S.GridBoxGeral>
                <S.GridBoxGeral>
                    <h2 className="title">GANHOS SOBRE SAQUES</h2>
                    <span className="numberValue blue">R${helpers.formatarNumero(totalAmountToWithdraw * 0.025)}</span>
                </S.GridBoxGeral>
            </S.Grids>
            <S.ThirdGrid>
                <S.GridBoxGeral>
                    <h2 className="titleMinor">SALDO BANCÁRIO</h2>
                    <span className="numberValueMinor blue">R${helpers.formatarNumero(bankAccountValue)}</span>
                </S.GridBoxGeral>

                <div className="setaBox">
                    <span className="setaDescription">SALDO BANCÁRIO - SAQUES</span>
                    <img className="seta" alt="seta pra direita" src="./icons/arrow-right-icon.png" />
                </div>

                <S.GridBoxGeral>
                    <h2 className="titleMinor">SALDO DISPONÍVEL</h2>
                    <span className="numberValueMinor blue">R${helpers.formatarNumero(bankAccountValue - totalAmountToWithdraw)}</span>
                </S.GridBoxGeral>

                <S.GridBoxGeral>
                    <h2 className="titleMinor">GANHOS SOBRE TOTAL</h2>
                    <span className="numberValueMinor blue">R${helpers.formatarNumero(bankAccountValue * 0.025)}</span>
                </S.GridBoxGeral>
            </S.ThirdGrid>
        </S.ClientPlataformContainer>
    );
}