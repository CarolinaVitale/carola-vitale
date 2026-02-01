import React from 'react';
import cv from '../images/Carolina-Vitale.jpg'
import '../App.css'

function CvImage() {

    return (
        <>
            <img src={cv} alt='cv' className='cv-image'></img>
        </>
    );
}

export default CvImage;