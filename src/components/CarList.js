import React, { Component } from 'react';

import './CarList.css';

class CarList extends Component {
    render() {
        return (
                <ul className="list_container">
                    <li id="car_list">
                        <img src={require('../images/car/santafe.jpeg')} alt="santafe" />
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/sonata.jpeg')} alt="sonata" />
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/genesis.jpeg')} alt="genesis" />
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/benz.jpeg')} alt="benz" />
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/suv.jpeg')} alt="suv" />
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/spark.jpeg')} alt="spark" />
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/smsuv.jpeg')} alt="smsuv" />
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/elec.jpeg')} alt="elec" />
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/qm.jpeg')} alt="qm" />
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                    <li id="car_list">
                        <img src={require('../images/car/corando.jpeg')} alt="corando" />
                        <button className="cal_price"><a href="#tenping">다이렉트특가확인</a></button>
                    </li>
                </ul>
        );
    }
}

export default CarList;