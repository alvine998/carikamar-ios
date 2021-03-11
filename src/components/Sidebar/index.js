import { Body, Button, Container, Content, Header, Right } from 'native-base';
import React, { Component } from 'react';
import { Image, Text, TouchableHighlight } from 'react-native';

export const Sidebar = () => {
    return (
        <Container>
            <Header transparent>
                <Body>
                    <Text>Welcome</Text>
                </Body>
                <Right/>
            </Header>
            <Content padder>
                <TouchableHighlight>
                    <Image/>
                </TouchableHighlight>
                <Text>Ariel</Text>
                <Button transparent full>
                    <Text>Beranda</Text>
                </Button>
            </Content>
        </Container>
    );
}