import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Title } from 'native-base';
import StripeCheckout from 'react-stripe-checkout';

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
                 </Body>
                 <StripeCheckout
                         token={this.onToken}
                         stripeKey="pk_test_prxw9H9C3g2hMFoMaoF2W48R"
                       />
               </Left>
             </CardItem>
           </Card>
           <Card>
             <CardItem>
               <Left>
                <Thumbnail source={require('./src/p5.jpg')} />
                 <Body>
                   <Text style={{fontWeight:'bold'}}>Product 2</Text>
                 </Body>
                 <StripeCheckout
                         token={this.onToken}
                         stripeKey="pk_test_prxw9H9C3g2hMFoMaoF2W48R"
                       />
               </Left>
             </CardItem>
           </Card>
           <Card>
             <CardItem>
               <Left>
                <Thumbnail source={require('./src/p2.jpg')} />
                 <Body>
                   <Text style={{fontWeight:'bold'}}>Product 3</Text>
                 </Body>
                 <StripeCheckout
                          token={this.onToken}
                          stripeKey="pk_test_prxw9H9C3g2hMFoMaoF2W48R"
                        />
               </Left>
             </CardItem>
           </Card>
           <Card>
             <CardItem>
               <Left>
                <Thumbnail source={require('./src/p4.jpg')} />
                 <Body>
                   <Text style={{fontWeight:'bold'}}>Product 4</Text>
                 </Body>
                 <StripeCheckout
                      token={this.onToken}
                      stripeKey="pk_test_prxw9H9C3g2hMFoMaoF2W48R"
                    />
               </Left>
             </CardItem>
           </Card>
           <Card>
             <CardItem>
               <Left>
                <Thumbnail source={require('./src/p3.jpg')} />
                 <Body>
                   <Text style={{fontWeight:'bold'}}>Product 5</Text>
                 </Body>
                 <StripeCheckout
                      token={this.onToken}
                      stripeKey="pk_test_prxw9H9C3g2hMFoMaoF2W48R"
                    />
               </Left>
             </CardItem>
           </Card>
         </Content>
       </Container>
    );
  }
}
