import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';


class Loading extends Component {
    constructor (props) {
        super(props);
    }

    renderloading() {
        if (this.props.loading) {
            return <ActivityIndicator size="large" color="#00ff00" />
        }
        return null
    }
    
    render() {
        return (
            this.renderloading()
        )
    }
}

const mapStateToProps = state => ({
    loading: state.Blogs.loading
})

const mapDispatchToProps = {
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Loading);