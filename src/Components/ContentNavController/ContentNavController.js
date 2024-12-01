import React, { useState } from "react";
import * as S from "./ContentNavControllerStyle";


export default function ContentNavController() {


    return (
        <S.ContainerNavControllerContent>
            <S.NavSection>
                <S.SelectedNavTitle><h1>GERENCIAMENTO DE PLATAFORMAS</h1></S.SelectedNavTitle>

                <S.Subtitle>NOSSAS PLATAFORMAS</S.Subtitle>
                <S.SubSubtitle>INTEGRADAS</S.SubSubtitle>

                <S.PlatformsContainer>
                    <S.PlatformItem>
                        <span className="name selected">OSCAR</span>
                    </S.PlatformItem>
                    <S.PlatformItem>
                        <span className="name">GOLDEN</span>
                    </S.PlatformItem>
                    <S.PlatformItem>
                        <span className="name">FERNANDO</span>
                    </S.PlatformItem>
                    <S.PlatformItem>
                        <span className="name">CLÁUDIO MINISTER</span>
                    </S.PlatformItem>
                    <S.PlatformItem>
                        <span className="name">SEBASTIAN FERRER</span>
                    </S.PlatformItem>
                    <S.PlatformItem>
                        <span className="name">EDGAR BRANDÃO</span>
                    </S.PlatformItem>
                </S.PlatformsContainer>
                
            </S.NavSection>

            <S.ActualTabContainer>

            </S.ActualTabContainer> 
        </S.ContainerNavControllerContent>
    )
}