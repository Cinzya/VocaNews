import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HTMLView from 'react-native-htmlview';

const EntryScreen = (props) => {

    const { EntryData } = props.route.params;


    return (
        <ScrollView style={styles.container}>

            <Image
                style={styles.image}
                source={{uri: EntryData.thumbnail}}
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    {EntryData.title}
                </Text>

                <View style={styles.metadata}>
                    <Text>
                        {EntryData.pubDate}
                    </Text>
                    <Text>
                        Author: {EntryData.author}
                    </Text>
                </View>

                <HTMLView
                    value={EntryData.content}
                    stylesheet={styles}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 300
    },
    content: {
        padding: '3%'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    strong: {
        fontWeight: "bold"
    },
    br: {
        margin: 0,
        padding: 0
    },
    p: {
        margin: 0,
        padding: 0
    }
})

export default EntryScreen;