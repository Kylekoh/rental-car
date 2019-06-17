import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header_wrapper">
                <h1 id="header_logo">
                    <img src={require('../images/logo/logo.png')} alt="롯데렌터카"/>
                </h1>
                <h1 id="header_name">
                    특가상품안내
                </h1>
            </div>
        );
    }
}

export default Header;