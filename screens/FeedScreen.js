import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';
import HTMLView from 'react-native-htmlview';

const FeedScreen = (props) => {

    const { FeedData } = props.route.params;
   
    return (
        <View>
        <ScrollView>
            {FeedData.items.map(article => (
                <TouchableNativeFeedback key={FeedData.items.indexOf(article)}>
                    <Text>
                        {article.title}
                    </Text>

                    <View style={styles.metadata}>
                        <Text>
                            {article.pubDate}
                        </Text>
                        <Text>
                            Author: {article.author}
                        </Text>
                    </View>

                    <HTMLView
                        value={article.description}
                        stylesheet={styles.description}
                    />
                    
                </TouchableNativeFeedback>
            ))}
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create ({
    description: {

    },
    metadata: {
        flexDirection: 'row'
    }
})

export default FeedScreen;