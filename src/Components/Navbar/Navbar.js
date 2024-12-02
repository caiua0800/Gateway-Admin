import React from "react";
import * as S from "./NavbarStyle";

export default function Navbar({ setNavbarSelected, navbarSelected }) {

    const handleReturnSelected = (it) => {
        if(it === navbarSelected)
            return true;
        else return false;
    }

    const handleChange = (it) => {
        if(it != navbarSelected){
            setNavbarSelected(it);
        }
    }

    return (
        <S.NavbarContainer>
            <S.NomePlataforma><span className="bold">KR GATEWAY - ADMIN</span> </S.NomePlataforma>

            <S.Nav>
                <S.NavItemBox onClick={() => handleChange("01")} className={handleReturnSelected("01") && "active"}>GERENCIAMENTO DE PLATAFORMAS</S.NavItemBox>
                <S.NavItemBox onClick={() => handleChange("02")} className={handleReturnSelected("02") && "active"}>GERENCIAMENTO DE SAQUES</S.NavItemBox>
                <S.NavItemBox onClick={() => handleChange("03")} className={handleReturnSelected("03") && "active"}>NOSSOS GANHOS (GERAL)</S.NavItemBox>
            </S.Nav>

            <S.UserArea>
                <div className="seusGanhos">SEUS GANHOS</div>
                <div className="perfil">
                    <div className="profilePicture"></div>
                    <span className="accountName">SUA CONTA</span>
                </div>
            </S.UserArea>
        </S.NavbarContainer>
    )
}