import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="../public/images/HongKong.jpeg" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="../public/images/Japan.jpeg" />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src="../public/images/LasVegas.jpg" />
                    <p className="legend">Las Vegas</p>
                </div>
                <div>
                    <img src="../public/images/Macao.jpeg" />
                    <p className="legend">Macao</p>
                </div>
            </Carousel>
        );
    }
}

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

