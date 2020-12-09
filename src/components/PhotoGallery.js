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
                    <img src={island} width="100%" alt="Island" className="picture" />
                    <img src={boatsandhills} width="25%" alt="Marina" className="picture" />
                    <img src={ocean} width="25%" alt="Angra dos Reis, RJ, Brazil" className="picture" />
                    <img src={tropical} width="25%" alt="Tropical paradise" className="picture" />
                    <img src={ldstemple} width="25%" alt="Lds Temple Porto Alegre" className="picture" />
                    <img src={sunset} width="25%" alt="Sunset in Porto Alegre, RS, Brazil" className="picture" />
                    <img src={desert} width="25%" alt="Southern Utah Desert" className="picture" />
                    <img src={redrocks} width="25%" alt="Zion National Park" className="picture" />
                    <img src={boats} width="25%" alt="Bay in Angra dos Reis, RJ, Brazil" className="picture" />
                </SRLWrapper>
            </div>
        )
    }
}
export default PhotoGallery;
