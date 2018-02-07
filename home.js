import React, { Component } from 'react';
import { StyleSheet, View, Image, Linking, Text, WebView, TouchableOpacity, Button} from 'react-native';
import { Container, Header, Footer, Content, Card, CardItem, Thumbnail, Left, Body, Right, Title } from 'native-base';
import Pay from './pay.js';

export default class Home extends React.Component {

  render() {
    return (
  <Container>
         <Content>
         <Text style={{fontWeight:'bold',lineHeight:55,fontSize:26,justifyContent:'space-between'}}>Stripe</Text>
           <Card>
             <CardItem>
               <Left>
                 <Thumbnail source={require('./src/p1.jpg')} />
                <Body>
                   <Text style={{fontWeight:'bold'}}>Product 1</Text>
                   <Text>$ 400</Text>
                 </Body>
              </Left>
               <Pay />
            </CardItem>
           </Card>
           <Card>
             <CardItem>
               <Left>
                <Thumbnail source={require('./src/p5.jpg')} />
                 <Body>
                   <Text style={{fontWeight:'bold'}}>Product 2</Text>
                   <Text>$ 500</Text>
                 </Body>
               </Left>
                <Pay />
             </CardItem>
           </Card>
           <Card>
             <CardItem>
               <Left>
                <Thumbnail source={require('./src/p2.jpg')} />
                 <Body>
                   <Text style={{fontWeight:'bold'}}>Product 3</Text>
                   <Text>$ 600</Text>
                 </Body>
               </Left>
                <Pay />
             </CardItem>
           </Card>
           <Card>
             <CardItem>
               <Left>
                <Thumbnail source={require('./src/p4.jpg')} />
                 <Body>
                   <Text style={{fontWeight:'bold'}}>Product 4</Text>
                   <Text>$ 700</Text>
                 </Body>
               </Left>
                <Pay />
             </CardItem>
           </Card>
           <Card>
             <CardItem>
               <Left>
                <Thumbnail source={require('./src/p3.jpg')} />
                 <Body>
                   <Text style={{fontWeight:'bold'}}>Product 5</Text>
                   <Text>$ 800</Text>
                 </Body>
               </Left>
                <Pay />
             </CardItem>
           </Card> 
         </Content>
       </Container>
    );
  }
}
