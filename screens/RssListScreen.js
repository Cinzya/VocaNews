import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import { RSSfetch } from '../store/actions/fetchAction';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const UrlList = this.props.UrlList;
        for (let count = 0; count < UrlList.length; count++) {
            this.props.RSSfetch(UrlList[count], count)
        }
    }
    
    render(){
    return (
        <View style={styles.container}>

        <ScrollView>
        {this.props.RSSItems.map(Blog => (
            <TouchableNativeFeedback
                onPress={() => {
                    this.props.navigation.navigate(
                        'Feed', {FeedData: Blog.data, name: Blog.data.feed.title})
                    }}
                key={this.props.RSSItems.indexOf(Blog)}>

            <View style={styles.card}>
                <Text style={styles.title}>
                    {Blog.data.feed.title}
                    </Text>
                <Text>
                    {Blog.data.feed.description}
                </Text>
            </View>

            </TouchableNativeFeedback>
        ))}
        </ScrollView>

        </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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

const mapStateToProps = state => ({
    UrlList: state.Blogs.UrlList,
    RSSItems: state.Blogs.RSSItems,
    error: state.Blogs.error,
    test: state.Blogs.test
})

const mapDispatchToProps = {
    RSSfetch
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);