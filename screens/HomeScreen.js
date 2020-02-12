import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';


function HomeScreen() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>VocaNews</Text>
        </View>
            <Text></Text>
        <View>

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

const mapStateToProps = state => ({
    Blogs: state.Blogs
})

const mapDispatchToProps = {
    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);