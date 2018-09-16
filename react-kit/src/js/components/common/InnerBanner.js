import React from 'react';
import PropTypes from 'prop-types';

export default class InnerBanner extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">{this.props.title}</h1>
                    <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                </div>
            </section>
        )
    }
}

InnerBanner.propTypes = {
    title: PropTypes.string.isRequired,
}