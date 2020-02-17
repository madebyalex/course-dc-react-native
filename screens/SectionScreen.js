import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class SectionScreen extends React.Component {
  static navigationOptions = {
    // title: 'Section'
    // header: null
    headerShown: false
  };

  componentDidMount() {
    StatusBar.setBarStyle('light-content', true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle('dark-content', true);
  }

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam('section');

    return (
      <Container>
        <StatusBar hidden />

        {/* <Text>{section.title}</Text> */}

        {/* <Button
          title='Close'
          onPress={() => {
            this.props.navigation.goBack();
          }}
        ></Button> */}

        <Cover>
          <Image source={section.image} />

          <ContentWrap>
            <Wrapper>
              <Logo source={section.logo} />
              <Subtitle>{section.subtitle}</Subtitle>
            </Wrapper>
            <Title>{section.title}</Title>
            <Caption>{section.caption}</Caption>
          </ContentWrap>
        </Cover>

        <TouchableOpacity
          style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <CloseView>
            <Ionicons
              name='ios-close'
              size={36}
              color='#4775F2'
              style={{ marginTop: -2, marginRight: -1 }}
            />
          </CloseView>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;

const Cover = styled.View`
  height: 375px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const ContentWrap = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  padding: 78px 20px 20px 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #ffffff;
  font-weight: bold;
  max-width: 170px;
`;

const Caption = styled.Text`
  margin-top: auto;
  color: #ffffff;
  font-size: 17px;
  max-width: 170px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
  /* padding: 0 0 5px 2px; */
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;

const Subtitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;
