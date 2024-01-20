import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import HongKongImage from './images/HongKong.jpeg'
import JapanImage from './images/Japan.jpeg'
import LasVegasImage from './images/LasVegas.jpg'
import MacaoImage from './images/Macao.jpeg'

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={HongKongImage} alt="Hong Kong" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src={JapanImage} alt="Japan" />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src={LasVegasImage} alt="Las Vegas Image" />
                    <p className="legend">Las Vegas</p>
                </div>
                <div>
                    <img src={MacaoImage} alt='Macao Image'/>
                    <p className="legend">Macao</p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;

