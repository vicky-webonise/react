import React from 'react';


export default class PageLoader extends React.Component {
    constructor(){
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div className="pageLoader">
                <div className="loader"></div>
            </div>
        )
    }
}