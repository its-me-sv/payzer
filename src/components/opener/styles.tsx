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
    justify-content: center;
`;

export const HeaderText = styled.Text`
    font-family: calibri;
    font-size: 84px;
    color: #272424;
    ${({isPurple}) => isPurple === true && `
        color: #efefef;
        opacity: 0.8;
    `}
`;

export const ClayImage = styled.Image`
    margin-top: 10%;
    margin-bottom: 12%;
    resize-mode: stretch;
    ${({dim}: {dim: {[key:string]: string}}) => `
        width: ${dim.width};
        height: ${dim.height};
        margin-left: ${dim.ml};
    `}
    ${({last}) => last === true && `
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
    elevation: 1;
    ${({isPurple}: {isPurple: boolean}) => isPurple === true && `
        color: #efefef;
        opacity: 0.8;
    `}
`;
