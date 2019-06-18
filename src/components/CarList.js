import React, { Component } from 'react';
import Countdown from './Countdown'

import './CarList.css';

class CarList extends Component {
    render() {
        return (
                <ul className="list_container">
                    <li id="car_list">
                        <img src={require('../images/car/santafe.jpeg')} alt="santafe" />
                        <Countdown date="2019-06-29T16:33:00"></Countdown>
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/sonata.jpeg')} alt="sonata" />
                        <Countdown date="2019-06-29T16:33:00"></Countdown>
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/genesis.jpeg')} alt="genesis" />
                        <Countdown date="2019-07-01T16:33:00"></Countdown>
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/benz.jpeg')} alt="benz" />
                        <Countdown date="2019-07-01T16:33:00"></Countdown>
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/suv.jpeg')} alt="suv" />
                        <Countdown date="2019-06-29T16:33:00"></Countdown>
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/spark.jpeg')} alt="spark" />
                        <Countdown date="2019-06-28T16:33:00"></Countdown>
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/smsuv.jpeg')} alt="smsuv" />
                        <Countdown date="2019-06-28T16:33:00"></Countdown>
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/elec.jpeg')} alt="elec" />
                        <Countdown date="2019-06-29T16:33:00"></Countdown>
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/corando.jpeg')} alt="corando" />
                        <Countdown date="2019-06-29T16:33:00"></Countdown>
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                </ul>
        );
    }
}

export default CarList;