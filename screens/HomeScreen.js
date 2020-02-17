import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar
} from 'react-native';
import styled from 'styled-components';
import Card from '../components/Card';
import Course from '../components/Course';
// import { Ionicons } from '@expo/vector-icons';
import { NotificationIcon } from '../components/Icons';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Avatar from '../components/Avatar';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: 'OPEN_MENU'
      }),

    updateName: name =>
      dispatch({
        type: 'UPDATE_NAME',
        name: name
      })
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    // title: 'Home'
    // header: null
    headerShown: false
  };

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  toggleMenu = () => {
    if (this.props.action == 'openMenu') {
      Animated.parallel([
        Animated.timing(this.state.scale, {
          toValue: 0.9,
          duration: 300,
          easing: Easing.in()
        }),
        Animated.timing(this.state.opacity, {
          toValue: 0.5,
          duration: 300
        })
      ]).start();
    }

    if (this.props.action == 'closeMenu') {
      Animated.parallel([
        Animated.timing(this.state.scale, {
          toValue: 1,
          duration: 300
        }),
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 300
        })
      ]).start();
    }
  };

  render() {
    // console.log(this.props.name);

    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity
          }}
        >
          <SafeAreaView style={{ height: 100 + '%' }}>
            <ScrollView>
              <TitleBar>
                <TouchableOpacity onPress={this.props.openMenu}>
                  {/* <Avatar source={require('../assets/avatar.jpg')} /> */}
                  <Avatar />
                </TouchableOpacity>
                <TitleBarCaption>
                  <Title>Welcome back,</Title>
                  <Name>{this.props.name}</Name>
                </TitleBarCaption>
                <NotificationIcon
                  size={32}
                  color='#4775f2'
                  style={{ marginLeft: 'auto', marginTop: 8, marginRight: 20 }}
                />
                {/* <Ionicons
              name='ios-notifications'
              size={32}
              color='#4775f2'
              style={{ marginLeft: 'auto', marginRight: 20 }}
            /> */}
              </TitleBar>

              <ScrollView
                horizontal={true}
                style={{
                  paddingLeft: 20,
                  paddingBottom: 20,
                  paddingTop: 30
                }}
                showsHorizontalScrollIndicator={false}
              >
                {logos.map((logo, index) => {
                  return (
                    <Logo key={index} text={logo.text} image={logo.image} />
                  );
                })}
                <ScrollEnd />
              </ScrollView>

              <SectionTitle>Continue Learning</SectionTitle>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30, paddingRight: 40 }}
                showsHorizontalScrollIndicator={false}
              >
                {cards.map((card, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      this.props.navigation.push('Section', {
                        section: card
                      });
                    }}
                  >
                    <Card
                      title={card.title}
                      image={card.image}
                      caption={card.caption}
                      logo={card.logo}
                      subtitle={card.subtitle}
                    />
                  </TouchableOpacity>
                ))}
                <ScrollEnd />
              </ScrollView>

              <SectionTitle>Courses</SectionTitle>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30, paddingRight: 40, paddingLeft: 10 }}
                showsHorizontalScrollIndicator={false}
              >
                {courses.map((course, index) => (
                  <Course
                    key={index}
                    image={course.image}
                    title={course.title}
                    subtitle={course.subtitle}
                    logo={course.logo}
                    author={course.author}
                    avatar={course.avatar}
                    caption={course.caption}
                  />
                ))}
                <ScrollEnd />
              </ScrollView>
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const RootView = styled.View`
  background: #000;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 20px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;

// const Avatar = styled.Image`
//   width: 44px;
//   height: 44px;
//   background: #111416;
//   border-radius: 22px;
//   margin-right: 12px;
// `;

const TitleBarCaption = styled.View`
  overflow: hidden;
`;

const SectionTitle = styled.Text`
  text-transform: uppercase;
  font-size: 15px;
  color: #b8bece;
  font-weight: 600;
  margin: 50px 0 0 20px;
`;

const ScrollEnd = styled.View`
  width: 20px;
`;

const logos = [
  {
    image: require('../assets/logo-framerx.png'),
    text: 'Framer X'
  },
  {
    image: require('../assets/logo-figma.png'),
    text: 'Figma'
  },
  {
    image: require('../assets/logo-studio.png'),
    text: 'Studio'
  },
  {
    image: require('../assets/logo-react.png'),
    text: 'React'
  },
  {
    image: require('../assets/logo-swift.png'),
    text: 'Swift'
  },
  {
    image: require('../assets/logo-sketch.png'),
    text: 'Sketch'
  }
];

const cards = [
  {
    title: 'React Native for Designers',
    image: require('../assets/background11.jpg'),
    subtitle: 'React Native',
    caption: '1 of 12 sections',
    logo: require('../assets/logo-react.png')
  },
  {
    title: 'Styled Components',
    image: require('../assets/background12.jpg'),
    subtitle: 'React Native',
    caption: '2 of 12 sections',
    logo: require('../assets/logo-react.png')
  },
  {
    title: 'Props and Icons',
    image: require('../assets/background13.jpg'),
    subtitle: 'React Native',
    caption: '3 of 12 sections',
    logo: require('../assets/logo-react.png')
  },
  {
    title: 'Static Data and Loop',
    image: require('../assets/background14.jpg'),
    subtitle: 'React Native',
    caption: '4 of 12 sections',
    logo: require('../assets/logo-react.png')
  }
];

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'Alex N.',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Design an interactive prototype'
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('../assets/background11.jpg'),
    logo: require('../assets/logo-react.png'),
    author: 'Alex N.',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Learn to design and code a React site'
  },
  {
    title: 'Design and Code with Framer X',
    subtitle: '10 sections',
    image: require('../assets/background14.jpg'),
    logo: require('../assets/logo-framerx.png'),
    author: 'Alex N.',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Create powerful design and code components for your app'
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('../assets/background6.jpg'),
    logo: require('../assets/logo-figma.png'),
    author: 'Alex N.',
    avatar: require('../assets/avatar.jpg'),
    caption:
      'Complete guide to designing a site using a collaborative design tool'
  }
];
