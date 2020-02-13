import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const RssList = (props) => (
    <View style={styles.container}>
        {props.data.map(Blog => (
            <TouchableOpacity
            onPress={() => {props.navigation.navigate('Feed')}}
            key={Blog.data.feed.title}>
            <View style={styles.card}>
                <Text style={styles.title}>{Blog.data.feed.title}</Text>
                <Text>{Blog.data.feed.description}</Text>
            </View>
            </TouchableOpacity>
        ))}
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '3%'
    },
    card: {
        padding: '3%',
        marginTop: '5%',
        backgroundColor: 'yellow'
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default RssList;