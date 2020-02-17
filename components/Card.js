import React from 'react';
import styled from 'styled-components';

const Card = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <CaptionWrap>
        <Caption>{props.caption}</Caption>
        <Subtitle>{props.subtitle}</Subtitle>
      </CaptionWrap>
      <Logo source={props.logo} />
    </Content>
  </Container>
);

export default Card;

const Container = styled.View`
  background: #ffffff;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin: 20px 0 0 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  /* opacity: 0; */
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0 0 20px;
  width: 170px;
`;

const Content = styled.View`
  padding: 12px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const CaptionWrap = styled.View``;

const Logo = styled.Image`
  margin-left: auto;
  width: 44px;
  height: 44px;
`;
const Caption = styled.Text`
  color: #3c4560;
  font-size: 19px;
  font-weight: 600;
`;
const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  padding-top: 2px;
`;
