import React from 'react';
import styled from 'styled-components';

const Logo = props => (
  <Container>
    <Image source={props.image} resizeMode='contain' />
    <Text>{props.text}</Text>
  </Container>
);

export default Logo;

const Container = styled.View`
  flex-direction: row;
  padding: 12px 16px;
  height: 60px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.06);
  align-items: center;
  background: #ffffff;
  margin: 0 16px 0 0;
  border-radius: 5px;
  /* elevation: 4; */
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
  margin-right: 12px;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;
