import React from 'react';
import Banner from '../components/common/Banner';

export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {

        }

    }
    render() {
        return (
            <div>
                <Banner />
                <div className="container py-3">
                    Home page
                </div>
            </div>
        )
    }
}