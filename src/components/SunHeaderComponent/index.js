import React from 'react'
import './sunheaderStyle.scss'
import sunVideo from '../../assets/images/Sun_00000.mp4'

const SunHeaderComponent = () => {
    return (
        <div>
            {/* <video id="myVideo" autoplay="" playsinline="" loop="" muted="" width="100%" height="100%">
                <source src={sunVideo} type="video/mp4" controls="false" ></source>
            </video> */}
            <video autoPlay loop muted width="100%" height="100%">
                <source src={sunVideo} type="video/mp4"></source>
            </video>
            <h3>
                test
            </h3>
            <h3>
                test
            </h3><h3>
                test
            </h3><h3>
                test
            </h3>
        </div>
    )
}

export default SunHeaderComponent