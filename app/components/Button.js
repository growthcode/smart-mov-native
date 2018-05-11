// https://code.tutsplus.com/tutorials/common-react-native-app-layouts-login-page--cms-27639
// If present, this spits out any child component that's added inside it. Otherwise, it outputs a Text component which shows the text inside the button.
// A default style is also added, but it won't be used if noDefaultStyles is present in the props.
// Unique button styles passed from the props are also optional.

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

const Button = (props) => {

    function getContent(){
        if(props.children){
            return props.children;
        }
        return <Text style={props.styles.label}>{props.label}</Text>
    }

    return (
        <TouchableHighlight
            underlayColor="#ccc"
            onPress={props.onPress}
            style={[
                props.noDefaultStyles ? '' : styles.button,
                props.styles ? props.styles.button : '']}
        >
            { getContent() }
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
});

export default Button;
