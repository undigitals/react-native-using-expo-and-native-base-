import React from 'react';
import {} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class AppFooter extends React.Component {
    render() {
        return (

            <Footer>
                <FooterTab>
                    <Button vertical>
                        <Icon name="apps" />
                        <Text>Apps</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="camera" />
                        <Text>Camera</Text>
                    </Button>
                    <Button vertical active>
                        <Icon active name="navigate" />
                        <Text>Navigate</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="person" />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>

        );
    }
}

module.export = AppFooter;