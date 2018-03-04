import React from 'react';
import { Text, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class AppHeader extends React.Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
        <Image source = {require('../img/logo.png')} style={{width:150, height:20}}/>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>


        );
    }
}

module.export = AppHeader;