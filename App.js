import React from 'react';
import {StyleSheet} from 'react-native';

import {Container, StyleProvider} from 'native-base';

import getTheme from './src/Themes/components';
import commonColor from './src/Themes/variables/commonColor';

import AppHeader from './src/components/appHeader';
import AppBody from './src/components/appBody';
import AppFooter from './src/components/appFooter';

export default class App extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
      <Container>
        <AppHeader/>
        <AppBody/>
        <AppFooter/>
      </Container>
      </StyleProvider>
    );
  }
}

