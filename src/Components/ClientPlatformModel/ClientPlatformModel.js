import React, { useEffect, useState } from "react";
import * as S from "./ClientPlatformModelStyle";
import Loading from "../Loading/Loading";
import helpers from "../../helpers";

export default function ClientPlatformModel({ plataforma }) {
    const [plataformaData, setPlataformaData] = useState(null);
    const [loadStatus, setLoadStatus] = useState(false);
    const [erro, setErro] = useState(false);

    const fetchData = async () => {
        console.log("Plataforma atual:", plataforma);
        let data = await helpers.getPlatformInfo(plataforma);
        if (data === null) {
            console.log("Nenhum dado retornado.");
            setTimeout(() => {
                setLoadStatus(false);
                setErro(true);
            }, 1000);
        } else {
            setPlataformaData(data);
            setTimeout(() => {
                setLoadStatus(false);
            }, 1000);
        }
    };

    useEffect(() => {
        setLoadStatus(true);
        fetchData();
    }, []);

    useEffect(() => {
        if (plataformaData)
            setLoadStatus(false);
    }, []);

    const handleReload = async () => {
        setLoadStatus(true);
        await fetchData();
    }

    if (erro) {
        return (
            <>
                <S.ClientPlataformContainer>
                    <S.Title>ERRO AO OBTER DADOS</S.Title>
                </S.ClientPlataformContainer>
            </>
        )
    }


    return (
        <>
            <S.ClientPlataformContainer>
                <Loading status={loadStatus} />
                <S.ReloadIcon onClick={handleReload} alt="reload" src="./icons/reload-icon.png" />
                <S.Title>ATIVIDADES DA PLATAFORMA</S.Title>
                <S.FirstGrid>
                    <S.GridBox>
                        <h2 className="title">QTDE. CLIENTES</h2>
                        <span className="numberValue">{plataformaData ? plataformaData.totalClients : 0}</span>
                    </S.GridBox>
                    <S.GridBox>
                        <h2 className="title">CONTRATOS ATIVOS</h2>
                        <span className="numberValue">{plataformaData ? plataformaData.totalPurchasesActive : 0}</span>
                    </S.GridBox>
                </S.FirstGrid>

                <S.SecondGrid>
                    <S.GridBox filled={plataformaData ? ((100225 / plataformaData.totalAmountActivePurchases) * 100) : 0}>
                        <h2 className="title">VALOR DE ATIVOS</h2>
                        <p className="numberValue2">R${plataformaData ? helpers.formatarNumero(plataformaData.totalAmountActivePurchases) : 0}</p>
                        <span className="titleBar">VALOR NO BANCO</span>
                        <div className="percentegeBar">
                            <div filled={plataformaData ? ((100225 / plataformaData.totalAmountActivePurchases) * 100) : 0} className="filled"></div>
                            <div className="percentageText">{plataformaData ? ((100225 / plataformaData.totalAmountActivePurchases) * 100).toFixed(2) : 0}%</div>
                        </div>
                    </S.GridBox>
                </S.SecondGrid>

                <S.Grids>
                    <S.GridBoxGeral>
                        <h2 className="title">COMPRAS ESSE MÊS</h2>
                        <span className="numberValue green">+ R${plataformaData ? helpers.formatarNumero(plataformaData.totalAmountPurchasesThisMonth) : 0}</span>
                    </S.GridBoxGeral>
                    <S.GridBoxGeral>
                        <h2 className="title">SAQUES À PAGAR ESSE MÊS</h2>
                        <span className="numberValue red">- R${plataformaData ? helpers.formatarNumero(plataformaData.totalAmountToWithdraw) : 0}</span>
                    </S.GridBoxGeral>
                    <S.GridBoxGeral>
                        <h2 className="title">GANHOS SOBRE SAQUES</h2>
                        <span className="numberValue blue">R${plataformaData ? helpers.formatarNumero((plataformaData.totalAmountToWithdraw * 0.025)) : 0}</span>
                    </S.GridBoxGeral>
                </S.Grids>
                <S.ThirdGrid>
                    <S.GridBoxGeral>
                        <h2 className="titleMinor">SALDO BANCÁRIO</h2>
                        <span className="numberValueMinor blue">R$2.000.225,00</span>
                    </S.GridBoxGeral>

                    <div className="setaBox">
                        <span className="setaDescription">SALDO BANCÁRIO - SAQUES</span>
                        <img className="seta" alt="seta pra direita" src="./icons/arrow-right-icon.png" />
                    </div>

                    <S.GridBoxGeral>
                        <h2 className="titleMinor">SALDO DISPONÍVEL</h2>
                        <span className="numberValueMinor blue">R$1.911.225,00</span>
                    </S.GridBoxGeral>

                    <S.GridBoxGeral>
                        <h2 className="titleMinor">GANHOS SOBRE TOTAL</h2>
                        <span className="numberValueMinor blue">R$47.780,62</span>
                    </S.GridBoxGeral>
                </S.ThirdGrid>
            </S.ClientPlataformContainer>
        </>
    )
}