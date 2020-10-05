import React, {Component} from 'react';
import Slider from 'react-slick';


import island from '../portfoliopics/island-min.jpg';
import boatsandhills from '../portfoliopics/boatsandhills-min.jpg';
import ocean from '../portfoliopics/ocean-min.jpg';
import tropical from '../portfoliopics/tropical-min.jpg';
import ldstemple from '../portfoliopics/ldstemple-min.jpg';
import sunset from '../portfoliopics/sunset-min.jpg';
import desert from '../portfoliopics/desert-min.jpg';
import redrocks from '../portfoliopics/redrocks-min.jpg';
import boats from '../portfoliopics/boats-min.jpg';


class PhotoGallery extends Component {
    render() {
        return (
            <div className="slider-gallery">
                <Slider dots={false} fade={true} infinite={true} speed={500} slidesToShow={1} arrows={true} slidesToScroll={1} className="slider">
                    <img src={island} width="100%" alt="island"/>
                    <img src={boatsandhills} width="100%" alt="boats and hills"/>
                    <img src={ocean} width="100%" alt="atlantic ocean"/>
                    <img src={tropical} width="100%" alt="tropical paradise"/>
                    <img src={ldstemple} width="100%" alt="lds temple"/>
                    <img src={sunset} width="100%" alt="sunset"/>
                    <img src={desert} width="100%" alt="desert"/>
                    <img src={redrocks} width="100%" alt="red rocks"/>
                    <img src={boats} width="100%" alt="boats"/>
                </Slider>
            </div>
        )
    }
}
export default PhotoGallery;
