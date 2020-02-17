import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: 'UPDATE_NAME',
        name: name
      })
  };
}

class Avatar extends React.Component {
  state = {
    photo: 'https://cl.ly/55da82beb939/download/avatar-default.jpg'
  };

  componentDidMount() {
    // fetch('https://uinames.com/api/?ext')

    fetch('https://uifaces.co/api?limit=1&random', {
      headers: new Headers({
        'X-API-KEY': 'd5cfc27115ce1f334c2a83c20eef47'
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);

        this.setState({
          // photo: response.photo
          photo: response[0].photo
        });

        // this.props.updateName(response.name);
        this.props.updateName(response[0].name);
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: #111416;
  margin-right: 12px;
`;
