import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Title } from 'native-base';
import Home from './home.js';


export default class App extends React.Component {
  render() {
    return (
        <Home/>
    );
  }
}
