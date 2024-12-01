import React from "react";
import * as S from "./NavbarStyle";

export default function Navbar() {

    return (
        <S.NavbarContainer>
            <S.NomePlataforma><span className="bold">KR GATEWAY - ADMIN</span> </S.NomePlataforma>

            <S.Nav>
                <S.NavItemBox className="active">GERENCIAMENTO DE PLATAFORMAS</S.NavItemBox>
                <S.NavItemBox>NOSSOS GANHOS (GERAL)</S.NavItemBox>
                <S.NavItemBox>FUNÇÕES ADICIONAIS</S.NavItemBox>
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