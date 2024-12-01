import React from "react";
import * as S from "./ContainerStyle";

export default function Container({ children }) {

    return (
        <S.ContainerContent>
            {children}
        </S.ContainerContent>
    )
}