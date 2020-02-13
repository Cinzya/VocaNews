import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { RSSfetch } from '../store/actions/fetchAction';

class HomeScreen extends Component {
    constructor() {
        super();
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
            <TouchableOpacity
            onPress={() => {
                this.props.navigation.navigate('Feed')
            }}
            key={Blog.data.feed.title}>
            <View style={styles.card}>
                <Text style={styles.title}>{Blog.data.feed.title}</Text>
                <Text>{Blog.data.feed.description}</Text>
            </View>
            </TouchableOpacity>
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