/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const ContainerView = styled.View`
    flex: 1;
`;

export const BackgroundImageContainer = styled.ImageBackground.attrs({
    resizeMode: 'cover',
})`
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;

export const HeaderText = styled.Text`
    font-family: calibri;
    font-size: 77px;
    color: #272424;
    opacity: 0.8;
    ${({isPurple}: {isPurple: boolean}) => isPurple === true && `
        color: #efefef;
        opacity: 0.8;
    `}
`;

interface ClayImageProps {
    dim?: any,
    last?: boolean
}

export const ClayImage = styled.Image`
    /* margin-top: 10%;
    margin-bottom: 12%; */
    resize-mode: stretch;
    ${({dim}: ClayImageProps) => `
        width: ${dim.width};
        height: ${dim.height};
        margin-left: ${dim.ml};
    `}
    ${({last}: ClayImageProps) => last === true && `
        margin-top: 2%;
        margin-bottom: 7%;
    `}
`;

export const FooterText = styled.Text`
    font-family: bahnschrift;
    font-size: 26px;
    color: #453b3c;
    text-align: center;
    opacity: 0.7;
    ${({isPurple}: {isPurple: boolean}) => isPurple === true && `
        color: #efefef;
        opacity: 0.8;
    `}
`;
