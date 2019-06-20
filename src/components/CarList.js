import React, { Component } from 'react';
import Countdown from './Countdown'

import './CarList.css';

class CarList extends Component {
    render() {
        return (
                <ul className="list_container">
                    <li id="car_list">
                        <a href="#tenping">
                            <img src={require('../images/car/genesis.jpeg')} alt="genesis" />
                            <Countdown date="2019-07-01T16:33:00"></Countdown>
                        </a>
                    </li>
                    <li id="car_list">
                        <a href="#tenping">
                            <img src={require('../images/car/santafe.jpeg')} id="santafe" alt="santafe" />
                            <Countdown date="2019-06-29T16:33:00"></Countdown>
                        </a>
                    </li>
                    <li id="car_list">
                        <a href="#tenping">
                            <img src={require('../images/car/sonata.jpeg')} alt="sonata" />
                            <Countdown date="2019-06-29T16:33:00"></Countdown>
                        </a>
                    </li>

                    <li id="car_list">
                        <a href="#tenping">
                            <img src={require('../images/car/benz.jpeg')} alt="benz" />
                            <Countdown date="2019-07-01T16:33:00"></Countdown>
                        </a>    
                    </li>
                    <li id="car_list">
                        <a href="#tenping">
                            <img src={require('../images/car/suv.jpeg')} alt="suv" />
                            <Countdown date="2019-06-29T16:33:00"></Countdown>
                        </a>
                    </li>
                    <a href="#tenping">    
                        <button className="cal_price">특가견적 받아보기</button>
                    </a>
                </ul>
                
        );
    }
}

export default CarList;