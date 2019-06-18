import React, { Component } from 'react';

import './Tenping.css';

class Tenping extends Component {
    componentDidMount () {
        const script = document.createElement("script");

        script.src = "//ads.tenping.kr/scripts/adsbytenping.min.js";
        script.async = true;
        document.body.appendChild(script)
    }
    render() {
        return (
            <tenping id="tenping" class="adsbytenping" tenping-ad-type="CInmlFSNPJoo9rBMK%2brlTg%3d%3d" tenping-ad-client="y7WBukX1zwoGNnPbQJlLC02mYVkV8%2bZkL6GNJO2dPJu5H0hYYFmyKZYWGtgWTMIA" tenping-ad-campaign="2019051616020001" tenping-ad-distributionAddID="2019061316460009" tenping-ad-contain_image="false" tenping-ad-contain_logo="false" tenping-ad-contain_Plugin="false" tenping-ad-contain_TpCall="false" tenping-ad-theme="white">
            </tenping>
        );
    }
}

export default Tenping;