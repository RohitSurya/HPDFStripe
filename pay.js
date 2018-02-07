
import React, { Component } from 'react';
import { StyleSheet, View, Image, Linking, Text, WebView, TouchableOpacity, Button} from 'react-native';

export default class Pay extends React.Component {

  render() {
    let html = `
    <form action="your-server-side-code" method="POST">
      <script
        src="https://checkout.stripe.com/checkout.js" class="stripe-button"
        data-key="pk_test_prxw9H9C3g2hMFoMaoF2W48R"
        data-amount="999"
        data-name="Demo Site"
        data-description="Widget"
        data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
        data-locale="auto">
      </script>
    </form>
    `;
    return (
      <WebView
    ref="myWebView"
    html={html}
    //injectedJavaScript={jsCode}
    javaScriptEnabledAndroid={true}
>
</WebView>
);
}
}
