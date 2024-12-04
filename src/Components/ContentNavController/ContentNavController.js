import React, { useState } from "react";
import * as S from "./ContentNavControllerStyle";
import ClientPlatformModel from "../ClientPlatformModel/ClientPlatformModel";
import ClientSaquesModel from "../ClientSaquesModel/ClientSaquesModel";
import OurGain from "../OurGain/OurGain";


export default function ContentNavController({ navbarSelected }) {
    const [platformSelected, setPlatformSelected] = useState("Oscar");

    const handleReturnIfSelected = (nome) => {
        if (nome === platformSelected)
            return "selected";
        return "";
    }

    return (
        <>
            {navbarSelected === "01" && (
                <S.ContainerNavControllerContent>
                    <S.NavSection>
                        <S.SelectedNavTitle><h1>GERENCIAMENTO DE PLATAFORMAS</h1></S.SelectedNavTitle>

                        <S.Subtitle>NOSSAS PLATAFORMAS</S.Subtitle>
                        <S.SubSubtitle>INTEGRADAS</S.SubSubtitle>

                        <S.PlatformsContainer>
                            <S.PlatformItem>
                                <span className={`name ${handleReturnIfSelected("Oscar")}`}>OSCAR</span>
                            </S.PlatformItem>
                        </S.PlatformsContainer>
                    </S.NavSection>

                    <S.ActualTabContainer>
                        <ClientPlatformModel plataforma="Oscar" />
                    </S.ActualTabContainer>
                </S.ContainerNavControllerContent>
            )}

            {navbarSelected === "02" && (
                <S.ContainerNavControllerContent>
                    <S.NavSection>
                        <S.SelectedNavTitle><h1>GERENCIAMENTO DE SAQUES</h1></S.SelectedNavTitle>

                        <S.Subtitle>NOSSAS PLATAFORMAS</S.Subtitle>
                        <S.SubSubtitle>INTEGRADAS</S.SubSubtitle>

                        <S.PlatformsContainer>
                            <S.PlatformItem>
                                <span className={`name ${handleReturnIfSelected("Oscar")}`}>OSCAR</span>
                            </S.PlatformItem>
                        </S.PlatformsContainer>
                    </S.NavSection>

                    <S.ActualTabContainer>
                        <ClientSaquesModel plataforma="Oscar" />
                    </S.ActualTabContainer>
                </S.ContainerNavControllerContent>
            )}

            {navbarSelected === "03" && (
                <S.ContainerNavControllerContent>
                    <S.NavSection>
                        <S.SelectedNavTitle><h1>GERENCIAMENTO DE GANHOS</h1></S.SelectedNavTitle>

                        <S.Subtitle>NOSSAS PLATAFORMAS</S.Subtitle>
                        <S.SubSubtitle>INTEGRADAS</S.SubSubtitle>

                        <S.PlatformsContainer>
                            <S.PlatformItem>
                                <span className={`name ${handleReturnIfSelected("Oscar")}`}>OSCAR</span>
                            </S.PlatformItem>
                        </S.PlatformsContainer>
                    </S.NavSection>

                    <S.ActualTabContainer>
                        <OurGain plataforma="Oscar" />
                    </S.ActualTabContainer>
                </S.ContainerNavControllerContent>
            )}
        </>

    )
}