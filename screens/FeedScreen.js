import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';

const FeedScreen = (props) => {

    function Cut(title) {
        if (title.length > 23) {
            const cut = title.slice(0,22)
            return cut + '...'
        }
        else {
            return title
        }
    }

    const { FeedData } = props.route.params;
   
    return (
        <View style={styles.container}>
        <ScrollView>
            {FeedData.items.map(article => (
                <TouchableNativeFeedback
                    onPress={() => {
                        props.navigation.navigate(
                            'Entry', {EntryData: article, name: Cut(article.title)}
                        )}}
                    key={FeedData.items.indexOf(article)}
                    style={styles.card}
                >

                    <Image
                        style={styles.image}
                        source={{uri: article.thumbnail}}
                    />

                    <Text style={styles.title}>
                        {article.title}
                    </Text>

                    <Text style={styles.metadata}>
                        {article.pubDate}
                    </Text>

                    
                </TouchableNativeFeedback>
            ))}
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    card: {
        padding: '3%',
        marginHorizontal: '5%',
        marginTop: '8%',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    image: {
        width: '100%',
        height: 180,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: '1%'
    },
    metadata: {
        flexDirection: 'row',
        marginBottom: '3%'
    },
    author: {
        marginLeft: '3%'
    }
})

export default FeedScreen;