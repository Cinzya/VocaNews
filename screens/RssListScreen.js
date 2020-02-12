import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { RSSfetch } from '../store/actions/fetchAction';
import { clearState } from '../store/actions/test';

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
        <View style={styles.header}>
            <Text style={styles.headerTitle}>VocaNews</Text>
        </View>
    )
}
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

const mapStateToProps = state => ({
    UrlList: state.Blogs.UrlList,
    RSSItems: state.Blogs.RSSItems,
    error: state.Blogs.error,
    test: state.Blogs.test
})

const mapDispatchToProps = {
    RSSfetch,
    clearState
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);