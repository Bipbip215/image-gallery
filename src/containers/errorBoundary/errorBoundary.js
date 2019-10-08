import React from 'react';

import './errorBoundary.css';

import ErrorMessage from '../../components/errorMessage';

export default class ErrorBoundary extends React.Component {

    state = {
        hasError: false,
    };

    componentDidCatch() {
        this.setState({
            hasError:true,
        });
    };

    render() {
        if(this.state.hasError) {
            return <ErrorMessage />
        }
        return this.props.children;
    };
};