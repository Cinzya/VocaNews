import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import { RSSfetch } from '../store/actions/fetchAction';
import Loading from '../components/ActivityIndicator';

class HomeScreen extends Component {
    componentDidMount() {
        const UrlList = this.props.UrlList;
        for (let count = 0; count < UrlList.length; count++) {
            this.props.RSSfetch(UrlList[count], count)
        }
    }

    render(){
    return (
        <View style={styles.container}>

        <Loading style={styles.laoding}/>

        <ScrollView>
        {this.props.RSSItems.map(Blog => (
            <TouchableNativeFeedback
                onPress={() => {
                    this.props.navigation.navigate(
                        'Feed', {FeedData: Blog, name: Blog.data.feed.title})
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
        // backgroundColor: '#fff',
        alignItems: 'center',
      },
      card: {
        padding: '3%',
        // marginBottom: '5%',
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey',
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    loading: {
        position: 'absolute',
        alignSelf: 'center'
    }
})

const mapStateToProps = state => ({
    UrlList: state.Blogs.UrlList,
    RSSItems: state.Blogs.RSSItems,
    error: state.Blogs.error,
    loading: state.Blogs.loading
})

const mapDispatchToProps = {
    RSSfetch
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);