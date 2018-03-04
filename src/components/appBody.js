import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class AppBody extends React.Component {
    render() {
        return (

            <Container >
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>NativeBase</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>

        );
    }
}


module.export = AppBody;