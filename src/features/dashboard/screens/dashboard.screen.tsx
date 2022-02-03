import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import styled from 'styled-components/native';

const DashboardContainer = styled.View`
  flex: 1;
  background-color: #222021;
  justify-content: space-around;
`;

const TitleBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  padding-bottom: 0%;
  padding-top: 0%;
`;

const TitleText = styled.Text`
  font-family: Gadamer;
  font-size: 42px;
`;

const LogoutImage = styled.Image.attrs({
  source: require('../../../../assets/icons/log-out.png'),
})`
  width: 36px;
  height: 36px;
  tint-color: #e5e1e2;
`;

const Header = styled.ImageBackground.attrs({
  source: require('../../../../assets/gradients/grad5.png'),
  imageStyle: {borderRadius: 14},
})`
  width: 93%;
  height: 24%;
  align-self: center;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-family: bahnschrift;
  font-size: 18px;
  color: #222021;
`;

const ClayChart = styled.Image.attrs({
  source: require('../../../../assets/clays/chart-1.png'),
})`
  width: 130px;
  height: 138px;
`;

const BodyContainer = styled.View`
  flex: 0.8;
  justify-content: space-between;
`;

const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const ItemBackground = styled.ImageBackground.attrs({
  imageStyle: {borderRadius: 14},
})`
  width: 42%;
  /* height: 60%; */
  align-items: center;
  padding: 3%;
  justify-content: space-around;
`;

const RocketImage = styled.Image`
  width: 120px;
  height: 122px;
`;

const ItemText = styled.Text`
  font-family: bahnschrift;
  font-size: 21px;
  color: #222021;
  margin-top: 14px;
`;

interface props {}

const Dashboard: React.FC<props> = () => {
  return (
    <DashboardContainer>
      <TitleBar>
        <TitleText>Payzer</TitleText>
        <LogoutImage />
      </TitleBar>
      <Header>
        <View>
          <HeaderText>Credited: 10,000 Rs</HeaderText>
          <HeaderText>Debited: 5,000 Rs</HeaderText>
          <HeaderText>Cards: 3</HeaderText>
          <HeaderText>Balance: 5,000 Rs</HeaderText>
        </View>
        <ClayChart />
      </Header>
      <BodyContainer>
        <RowContainer>
          <ItemBackground
            source={require('../../../../assets/gradients/grad2.png')}>
            <RocketImage
              source={require('../../../../assets/clays/rocket.png')}
            />
            <ItemText>Transfer</ItemText>
          </ItemBackground>
          <ItemBackground
            source={require('../../../../assets/gradients/grad1.png')}>
            <RocketImage
              source={require('../../../../assets/clays/book.png')}
            />
            <ItemText>Transactions</ItemText>
          </ItemBackground>
        </RowContainer>
        <RowContainer>
          <ItemBackground
            source={require('../../../../assets/gradients/grad5.png')}>
            <RocketImage
              source={require('../../../../assets/clays/wallet-1.png')}
            />
            <ItemText>Wallet</ItemText>
          </ItemBackground>
          <ItemBackground
            source={require('../../../../assets/gradients/grad4.png')}>
            <RocketImage
              source={require('../../../../assets/clays/tools.png')}
            />
            <ItemText>Settings</ItemText>
          </ItemBackground>
        </RowContainer>
      </BodyContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
