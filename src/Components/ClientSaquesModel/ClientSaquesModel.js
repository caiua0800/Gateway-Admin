import React, { useState, useEffect } from "react";
import * as S from "./ClientSaquesModelStyle";
import Loading from "../Loading/Loading";
import helpers from "../../helpers";

export default function ClientSaquesModel() {
    const [saquesClientesData, setSaquesClientesData] = useState(null);
    const [loadStatus, setLoadStatus] = useState(false);
    const [erro, setErro] = useState(false);
    const [tipoDoSaque, setTipoDoSaque] = useState("doAdmin")

    const handleReturnIfSelected = (it) => {
        return it === tipoDoSaque ? "selected padrao" : "divTipo padrao";
    }

    useEffect(() => {
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
    }, []);




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
                                        <tr key={saque.withdrawalId}>
                                            <S.Td>{saque.withdrawalId}</S.Td>
                                            <S.Td>{saque.dateCreated}</S.Td>
                                            <S.Td>{saque.clientId}</S.Td>
                                            <S.Td>R${helpers.formatarNumero(saque.amountWithdrawn)}</S.Td>
                                            <S.Td>R${helpers.formatarNumero(saque.amountWithdrawn * 0.96)}</S.Td>
                                            <S.Td>{saque.status}</S.Td>
                                        </tr>
                                    ))}
                                </tbody>
                            </S.Tabela>
                        )}
                    </S.TabelaDeSaques>
                )}


            </S.ClientSaquesModelContent>
        </>
    )
}