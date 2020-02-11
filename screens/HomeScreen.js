import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


function HomeScreen() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>VocaNews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    headerTitle: {
        color: 'white',
        fontSize: 18
    }
})

export default HomeScreen;