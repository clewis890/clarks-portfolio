import React, {Component} from 'react';
import { SRLWrapper } from "simple-react-lightbox";

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
            <div className="photo-gallery">
                <SRLWrapper>
                    <img src={island} width="100%" alt="Island"/>
                    <img src={boatsandhills} width="25%" alt="Marina"/>
                    <img src={ocean} width="25%" alt="Angra dos Reis, RJ, Brazil"/>
                    <img src={tropical} width="25%" alt="Tropical paradise"/>
                    <img src={ldstemple} width="25%" alt="Lds Temple Porto Alegre"/>
                    <img src={sunset} width="25%" alt="Sunset in Porto Alegre, RS, Brazil"/>
                    <img src={desert} width="25%" alt="Southern Utah Desert"/>
                    <img src={redrocks} width="25%" alt="Zion National Park"/>
                    <img src={boats} width="25%" alt="Bay in Angra dos Reis, RJ, Brazil"/>
                </SRLWrapper>
            </div>
        )
    }
}
export default PhotoGallery;
