import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

class Carousel extends Component {
    render() { 
        const imagesCarousel = [
            {
                "key" : 1,
                'caption' : '',
                "src" : "https://cdn.fptshop.com.vn/Uploads/Originals/2020/4/4/637216214820076131_Banner-HPT3-C1-2x.png",
            },
            {
                "key" : 2,
                'caption' : '',
                "src" : "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/3/31/637212446640247220_C1.png",
            },
            {
                "key" : 3,
                'caption' : '',
                "src" : "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/3/31/637212921094745540_C1.png",
            },
            {
                "key" : 4,
                'caption' : '',
                "src" : "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/4/5/637216741707634874_C1%20Laptop%20Gaming%20-%20Section1.png"
            },
        ]
        return (
            <UncontrolledCarousel items={imagesCarousel}></UncontrolledCarousel>
        );
    }
}
export default Carousel;