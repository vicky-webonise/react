import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'

import Container from '../container/Container';
import Home from '../components/Home';
import Blog from '../components/Blog';

export default class Root extends React.Component {
    render() {
        return (
            <HashRouter>

                <Container path='/'>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                </Container>

            </HashRouter>
        );
    }
}