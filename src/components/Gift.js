import React, { Component, Fragment } from 'react';

import './Gift.css';

class Gift extends Component {
    render() {
        return (
            <Fragment>
                <div className="gift_wrapper">
                    <h1 id="gift_img">
                        <img src={require('../images/logo/gift.png')} alt="고객사은품"/>
                    </h1>
                </div>
                <div className="whiteContainer">
                </div>
            </Fragment>
        );
    }
}

export default Gift;