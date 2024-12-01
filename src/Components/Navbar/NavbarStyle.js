import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    padding: 20px 10px;
    background: linear-gradient(to bottom, rgba(210, 210, 210, 1), rgba(240, 240, 240, 1));
    position: fixed;
    top: 0;
    left: 0;
    filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.4));

    display: grid;
    grid-template-columns: 3fr 6fr 3fr;
`;

export const NomePlataforma = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: rgba(0, 100, 200, 1);
    font-weight: 100;
    border-bottom: 3px solid rgba(0, 100, 200, 0);

    .bold{
        font-weight: 800;
    }
`;

export const Nav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const NavItemBox = styled.div`
    width: max-content;
    height: 100%;
    box-sizing: border-box;
    border-bottom: 3px solid rgba(0, 100, 200, 0);
    transition: .3s;
    font-size: 13px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;

    &:hover{
        border-bottom: 3px solid rgba(0, 100, 200, 0.8);
    }

    &.active{
        border-bottom: 3px solid rgba(0, 100, 200, 0.8);
    }
`;

export const UserArea = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;

    .seusGanhos{
        width: 100%;
        height: 80%;
        display: flex;
        align-items: center;
        transition: .3s;
        border-left: 1px solid rgba(0, 0, 0, 0.8);
        font-size: 14px;
        font-weight: 100;
        box-sizing: border-box;
        padding-left: 20px;
        cursor: pointer;

        &:hover{
            border-left: 1px solid rgba(0, 100, 200, 0.8);
            color: 1px solid rgba(0, 100, 200, 0.8);
        }
    }

    .perfil{
        width: 100%;
        display: flex;
        gap: 10px;
        align-items: center;

        .profilePicture{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            filter: drop-shadow(0 0 5px rgba(0,0,0,0.8));
            box-shadow: 1px 1px 1px rgba(0,0,0,0.4);
            background: rgba(0,0,0,0.1);
            cursor: pointer;
        }

        .accountName{
            font-size: 12px;
            color: black
            width: max-content;
        }
    }
`;

