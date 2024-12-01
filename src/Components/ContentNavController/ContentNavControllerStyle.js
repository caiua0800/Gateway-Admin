import styled from "styled-components";

export const ContainerNavControllerContent = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 3fr 10fr;
`;

export const NavSection = styled.div`
    width: 100%;
    height: 100%;
    border-right: 1px solid rgba(0,0,0,0.2);
    padding: 100px 20px 30px 20px;
    box-sizing: border-box;
`;

export const ActualTabContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const SelectedNavTitle = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: center;

    h1{
        width: 100%;
        margin: 0;
        background: rgba(10, 10, 10, 0.1);
        border: 1px solid rgba(30, 30, 30, 0.2);
        font-weight: 500;
        font-size: 16px;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 6px;
    }
`;

export const Subtitle = styled.p`
    margin: 0;
    margin-top: 40px;
    font-weight: 500;
    color: rgba(0,0,0,0.8);
    width: 100%;
    text-align: start;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(30, 30, 30, 0.2);
`;

export const SubSubtitle = styled.div`
    color: rgba(0,0,0,0.4);
    font-weight: 800;
    font-size: 12px;
    margin-top: 5px;
    width: 100%;
    text-align: start;
`;

export const PlatformsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 40px;
`;

export const PlatformItem = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0,0,0,0.8);

    .name{
        font-size: 14px;
        width: 100%;
        cursor: pointer;
        transition: .3s;

        &:hover{
            font-weight: 600;
            color: rgba(0, 100, 200, 1);
            border-left: 2px solid rgba(0, 100, 200, 1);
        }
    }

    .selected{
        font-weight: 600;
        color: rgba(0, 100, 200, 1);
        border-left: 2px solid rgba(0, 100, 200, 1);
    }
`;

// export const nome = styled.div``;

// export const nome = styled.div``;

// export const nome = styled.div``;



