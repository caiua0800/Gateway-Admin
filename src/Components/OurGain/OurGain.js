import React, { useEffect, useState } from "react";
import * as S from "./OurGainStyle";
import Loading from "../Loading/Loading";
import helpers from "../../helpers";
import Frequency from "../DoneCharts/Frequency";

export default function OurGain({ plataforma }) {
    const [plataformaData, setPlataformaData] = useState(null);
    const [loadStatus, setLoadStatus] = useState(false);
    const [erro, setErro] = useState(false);
    const [saquesClientesData, setSaquesClientesData] = useState(null);
    const [saquesAdminData, setSaquesAdminData] = useState(null);
    const [chartData, setChartData] = useState([]);

    const fetchData = async () => {
        setLoadStatus(true);
        let data = await helpers.getPlatformInfo(plataforma);

        await helpers.getAllClientWithdrawals("Oscar").then(res => {
            if(res){
                setSaquesClientesData(res.filter(sa => sa.status === 2));
            }
        }).catch(err => {
            console.log(err);
            setErro(true);
        });

        await helpers.getAllAdminWithdrawals("Oscar").then(res => {
            if(res)
                setSaquesAdminData(res.filter(sa => sa.status === 2));
        }).catch(err => {
            console.log(err);
            setErro(true);
        });

        if (data === null) {
            console.log("Nenhum dado retornado.");
            setErro(true);
        } else {
            setPlataformaData(data);
        }
        setTimeout(() => {
            setLoadStatus(false);
        }, 1200);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleReload = async () => {
        await fetchData();
    }

    useEffect(() => {
        if(plataformaData){
            setChartData(plataformaData.totalWithdrawalsLastFourMonths.reverse() || []);
            console.log(plataformaData)
        }
    }, [plataformaData])

    if (erro) {
        return (
            <S.ClientPlataformContainer>
                <S.Title>ERRO AO OBTER DADOS</S.Title>
            </S.ClientPlataformContainer>
        );
    }
    

    const totalWithdrawn = plataformaData ? plataformaData.totalAmountWithdrawn : 0;
    const gainThisMonth = plataformaData ? plataformaData.totalAmountWithdrawn * 0.025 : 0;
    const totalGainClients = plataformaData ? plataformaData.totalAmountWithdrawnClients * 0.025 : 0;
    const totalGainAdmin = plataformaData ? plataformaData.totalAmountWithdrawnAdmin * 0.025 : 0;


    return (
        <S.ClientPlataformContainer>
            <Loading status={loadStatus} />
            <S.ReloadIcon onClick={handleReload} alt="reload" src="./icons/reload-icon.png" />
            <S.Title>NOSSOS GANHOS Ref #{plataforma}</S.Title>

            <S.FrequencyChartContainer>
                <div className="chart">
                    <Frequency data={chartData} />
                </div>
            </S.FrequencyChartContainer>

            <S.Grid>
                <S.Box>
                    <span className="title">GANHO ESTE MÊS</span>
                    <div className="amount">
                        <span className="amountReal">R${helpers.formatarNumero(gainThisMonth)}</span>
                        <span className="amountUsd">U${helpers.formatarNumero(gainThisMonth / 5.34)}</span>
                    </div>
                    <span className="closeDay">O Mês Fecha Em 19 Dias</span>
                </S.Box>
                <S.Box>
                    <span className="title">RETIRADAS ESTE MÊS</span>
                    <div className="amount">
                        <span className="amountReal">R${helpers.formatarNumero(totalWithdrawn)}</span>
                        <span className="amountUsd">U${helpers.formatarNumero(totalWithdrawn / 5.34)}</span>
                    </div>
                    <span className="closeDay">O Mês Fecha Em 19 Dias</span>
                </S.Box>
                <S.Box>
                    <span className="title">GANHOS SOBRE SAQUES (Clientes)</span>
                    <div className="amount">
                        <span className="amountReal">R${helpers.formatarNumero(totalGainClients)}</span>
                        <span className="amountUsd">U${helpers.formatarNumero(totalGainClients / 5.34)}</span>
                    </div>
                    <div className="barItem">
                        <span className="titleBar">REF. TOTAL</span>
                        <div className="percentegeBar">
                            <div className="filled" style={{ width: `${(totalGainClients / gainThisMonth) * 100}%` }}></div>
                            <div className="percentageText">{((totalGainClients / gainThisMonth) * 100).toFixed(2)}%</div>
                        </div>
                    </div>
                </S.Box>
                <S.Box>
                    <span className="title">GANHOS SOBRE SAQUES (Admin)</span>
                    <div className="amount">
                        <span className="amountReal">R${helpers.formatarNumero(totalGainAdmin)}</span>
                        <span className="amountUsd">U${helpers.formatarNumero(totalGainAdmin / 5.34)}</span>
                    </div>
                    <div className="barItem">
                        <span className="titleBar">REF. TOTAL</span>
                        <div className="percentegeBar">
                            <div className="filled" style={{ width: `${(totalGainAdmin / gainThisMonth) * 100}%` }}></div>
                            <div className="percentageText">{((totalGainAdmin / gainThisMonth) * 100).toFixed(2)}%</div>
                        </div>
                    </div>
                </S.Box>
                <S.Box>
                    <span className="titleBoxDown">SAQUES ADMIN</span>
                    <S.TableContainer>
                        <div className="columns">
                            <span className="item">ID Cliente</span>
                            <span className="item">Data</span>
                            <span className="item">Valor</span>
                            <span className="item">Valor Recebido</span>
                            <span className="item">Lucro</span>
                        </div>
                        <div className="tableBody">
                            <div className="rows">
                                {saquesAdminData && saquesAdminData.map(saque => (
                                    <>
                                        <span className="item">{plataforma}</span>
                                        <span className="item">{helpers.formatarData(saque.dateCreated)}</span>
                                        <span className="item">R${helpers.formatarNumero(saque.amountWithdrawn || 0)}</span>
                                        <span className="item">R${helpers.formatarNumero(saque.amountWithdrawn * 0.96 || 0)}</span>
                                        <span className="item">R${helpers.formatarNumero(saque.amountWithdrawn * 0.025 || 0)}</span>
                                    </>
                                ))}
                            </div>
                        </div>
                    </S.TableContainer>
                </S.Box>
                <S.Box>
                    <span className="titleBoxDown">SAQUES CLIENTES</span>
                    <S.TableContainer>
                        <div className="columns">
                            <span className="item">ID Cliente</span>
                            <span className="item">Data</span>
                            <span className="item">Valor</span>
                            <span className="item">Valor Recebido</span>
                            <span className="item">Lucro</span>
                        </div>
                        <div className="tableBody">
                            <div className="rows">
                                {saquesClientesData && saquesClientesData.map(saque => (
                                    <>
                                        <span className="item">{saque.clientId}</span>
                                        <span className="item">{helpers.formatarData(saque.dateCreated)}</span>
                                        <span className="item">R${helpers.formatarNumero(saque.amountWithdrawn || 0)}</span>
                                        <span className="item">R${helpers.formatarNumero(saque.amountWithdrawn * 0.96 || 0)}</span>
                                        <span className="item">R${helpers.formatarNumero(saque.amountWithdrawn * 0.025 || 0)}</span>
                                    </>
                                ))}
                            </div>
                        </div>
                    </S.TableContainer>
                </S.Box>

            </S.Grid>
        </S.ClientPlataformContainer>
    );
}