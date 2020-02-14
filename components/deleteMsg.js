import React from 'react';
import { View, Text, Animated, StyleSheet } from "react-native";

const LeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })
    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.text, {transform: [{scale}]}]}>Delete Article</Animated.Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        justifyContent: 'center',
        flex: 1
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        padding: 20
    }
})

export default LeftActions;
