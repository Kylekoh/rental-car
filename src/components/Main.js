import React, { Component } from 'react';

import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="banner_wrapper">
                <h1 id="main_banner">
                    <a href="#tenping">
                        <img src={require('../images/logo/main_banner(mob).jpeg')} alt="롯데렌터카" />
                    </a>
                </h1>
            </div>
        );
    }
}

export default Main;