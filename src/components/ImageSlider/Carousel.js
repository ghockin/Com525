import React, { useState } from 'react'
import './Carousel.css'
import { images } from './CarouselData';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Carousel = () => {

    const [currImg, setCurrImg] = useState(0);

    return (
        <div className="carousel">
            <div className="carouselInner" style={{ backgroundImage: `url(${images[currImg].img})` }}>
                <div className='left' 
                onClick={() => {
                    currImg > 0 && setCurrImg(currImg - 1);
                }}
                >
                    <ArrowBackIcon style = {{fontSize: 50}}>

                    </ArrowBackIcon>
                </div>
                <div className='center'>
                </div>
                <div className='right'
                onClick={() => {
                    currImg < images.length -1 && setCurrImg(currImg + 1);
                }}
                >
                    <ArrowForwardIcon style = {{fontSize: 50}}>

                    </ArrowForwardIcon>
                </div>
            </div>
        </div>
    )
}

export default Carousel