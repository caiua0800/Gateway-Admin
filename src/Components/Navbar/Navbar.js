import React, { useEffect, useState } from "react";
import * as S from "./NavbarStyle";
import helpers from "../../helpers";

export default function Navbar({ setNavbarSelected, navbarSelected }) {

    const [platformData, setPlatformData] = useState(null);

    const handleReturnSelected = (it) => {
        if (it === navbarSelected)
            return true;
        else return false;
    }

    const handleChange = (it) => {
        if (it != navbarSelected) {
            setNavbarSelected(it);
        }
    }

    useEffect(() => {
        if (!platformData) {
            helpers.getPlatformInfo("Oscar").then(resposta => {
                console.log(resposta)
                setPlatformData(resposta);
            }).catch(error => {
                console.log(error);
            });
        }
    })

    const meuGanho = platformData ? ((platformData.totalAmountWithdrawn * 0.025) / 2) : 0;

    return (
        <S.NavbarContainer>
            <S.NomePlataforma><span className="bold">KR GATEWAY - ADMIN</span> </S.NomePlataforma>

            <S.Nav>
                <S.NavItemBox onClick={() => handleChange("01")} className={handleReturnSelected("01") && "active"}>GERENCIAMENTO DE PLATAFORMAS</S.NavItemBox>
                <S.NavItemBox onClick={() => handleChange("02")} className={handleReturnSelected("02") && "active"}>GERENCIAMENTO DE SAQUES</S.NavItemBox>
                <S.NavItemBox onClick={() => handleChange("03")} className={handleReturnSelected("03") && "active"}>NOSSOS GANHOS (GERAL)</S.NavItemBox>
            </S.Nav>

            <S.UserArea>
                <div className="seusGanhos"><span style={{fontWeight: "500"}}>SEUS GANHOS:</span> <span style={{fontWeight: "600", color: "rgba(60, 100, 0, 1)"}}>R${helpers.formatarNumero(meuGanho)}</span></div>
                <div className="perfil">
                    <span className="accountName">SAIR</span>
                </div>
            </S.UserArea>
        </S.NavbarContainer>
    )
}