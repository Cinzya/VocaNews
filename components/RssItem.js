import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const RssItem = (props) => (
    <View style={styles.card}>
        <Text style={styles.title}>
            {props.title}
            </Text>
        <Text>
            {props.description}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '3%'
    },
    card: {
        padding: '3%',
        // marginBottom: '5%',
        backgroundColor: 'yellow',
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey',
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default RssItem;