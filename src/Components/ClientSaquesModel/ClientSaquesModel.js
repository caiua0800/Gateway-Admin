import React, { useState, useEffect } from "react";
import * as S from "./ClientSaquesModelStyle";
import Loading from "../Loading/Loading";
import helpers from "../../helpers";

export default function ClientSaquesModel() {
    const [saquesClientesData, setSaquesClientesData] = useState(null);
    const [loadStatus, setLoadStatus] = useState(false);
    const [erro, setErro] = useState(false);
    const [tipoDoSaque, setTipoDoSaque] = useState("doAdmin");
    const [selectedWithdraw, setSelectedWithdraw] = useState(null);

    const handleReturnIfSelected = (it) => {
        return it === tipoDoSaque ? "selected padrao" : "divTipo padrao";
    }

    const fatchData = async () => {
        setLoadStatus(true);

        helpers.getClientWithdrawals("Oscar").then(res => {
            setSaquesClientesData(res);

            console.log(res)
        }).catch(err => {
            console.log(err);
            setErro(true);
        });

        setTimeout(() => {
            setLoadStatus(false);
        }, 1000);
    }

    useEffect(() => {
        fatchData();
    }, []);

    const handleEditStatus = async (newStatus) => {
        if(selectedWithdraw && newStatus){
            setLoadStatus(true)
            const res = await helpers.editarStatusSaque(selectedWithdraw, newStatus);

            setTimeout(() => {
                setLoadStatus(false);
            },2000);

            if(res){
                alert("Saque atualizado com sucesso.");
                await fatchData();
            }else{
                alert("Erro ao atualizar o saque.");
            }
            setSelectedWithdraw(null);
        }
    }

    if (erro) {
        return (
            <>
                <S.ClientSaquesModelContent>
                    <S.Title>ERRO AO OBTER DADOS</S.Title>
                </S.ClientSaquesModelContent>
            </>
        )
    }

    return (
        <>
            <S.ClientSaquesModelContent>
                <S.Title>Saques</S.Title>
                <Loading status={loadStatus} />

                <S.SelecionarTipo>
                    <div onClick={() => setTipoDoSaque("doAdmin")} className={handleReturnIfSelected("doAdmin")}>ADMIN</div>
                    <div onClick={() => setTipoDoSaque("dosClientes")} className={handleReturnIfSelected("dosClientes")}>CLIENTES</div>
                </S.SelecionarTipo>


                {tipoDoSaque === "dosClientes" && (
                    <S.TabelaDeSaques>
                        {loadStatus ? (
                            <Loading status={true} />
                        ) : (
                            <S.Tabela>
                                <thead>
                                    <tr>
                                        <S.Th>ID</S.Th>
                                        <S.Th>DATA</S.Th>
                                        <S.Th>ID CLIENTE</S.Th>
                                        <S.Th>VALOR SOLICITADO</S.Th>
                                        <S.Th>VALOR RECEBÍVEL</S.Th>
                                        <S.Th>STATUS</S.Th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {saquesClientesData && saquesClientesData.map(saque => (
                                        <tr key={saque.withdrawalId} onClick={() => setSelectedWithdraw(saque.withdrawalId)}>
                                            <S.Td>{saque.withdrawalId}</S.Td>
                                            <S.Td>{helpers.formatarData(saque.dateCreated)}</S.Td>
                                            <S.Td>{saque.clientId}</S.Td>
                                            <S.Td>R${helpers.formatarNumero(saque.amountWithdrawn)}</S.Td>
                                            <S.Td>R${helpers.formatarNumero(saque.amountWithdrawn * 0.96)}</S.Td>
                                            <S.Td>{helpers.handleStatus(saque.status)}</S.Td>
                                        </tr>
                                    ))}
                                </tbody>
                            </S.Tabela>
                        )}
                    </S.TabelaDeSaques>
                )}


                {selectedWithdraw && (
                    <S.ModalAceitar>
                        <div className="box">
                            <span className="exit" onClick={() => setSelectedWithdraw(null)}>x</span>
                            <span className="title">AUTORIZAR SAQUE #{selectedWithdraw}?</span>
                            <div className="buttons">
                                <button onClick={() => handleEditStatus(3)}>NEGAR</button>
                                <button onClick={() => handleEditStatus(2)}>ACEITAR</button>
                            </div>
                        </div>
                    </S.ModalAceitar>
                )}


            </S.ClientSaquesModelContent>
        </>
    )
}