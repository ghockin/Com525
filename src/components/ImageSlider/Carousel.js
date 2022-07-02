/* Copyright 2022, Gabriel Hockin, All rights reserved. */

import React, { useState } from 'react'
import './Carousel.css'
import { images } from './CarouselData';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel() {
    const [currImg, setCurrImg] = useState(0);

    return (
        <div className='App'>
            <div className="carousel">
                <div
                    className="carouselInner"
                    style={{ backgroundImage: `url(${images[currImg].img})` }}
                >
                    <div
                        className="left"
                        onClick={() => {
                            currImg > 0 && setCurrImg(currImg - 1);
                        }}
                    >
                        <ArrowBackIosIcon style={{ fontSize: 30 }} />
                    </div>
                    <div className="center">
                        <h1>{images[currImg].title}</h1>
                    </div>
                    <div
                        className="right"
                        onClick={() => {
                            currImg < images.length - 1 && setCurrImg(currImg + 1);
                        }}
                    >
                        <ArrowForwardIosIcon style={{ fontSize: 30 }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel