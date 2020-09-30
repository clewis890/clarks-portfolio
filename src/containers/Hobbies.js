import React, { Component } from 'react';



import island from '../portfoliopics/island.jpg';
import boatsandhills from '../portfoliopics/boatsandhills.jpg';
import ocean from '../portfoliopics/ocean.jpg';
import tropical from '../portfoliopics/tropical.jpg';
import ldstemple from '../portfoliopics/ldstemple.jpg';
import sunset from '../portfoliopics/sunset.jpg';
import desert from '../portfoliopics/desert.jpg';
import redrocks from '../portfoliopics/redrocks.jpg';
import boats from '../portfoliopics/boats.jpg';

import yerbamate from '../portfoliopics/chimarrao.jpg';

class Hobbies extends Component {

state = {
    index: 0,
    picList: [island, boatsandhills, ocean, tropical, ldstemple, sunset, desert, redrocks, boats]
};

onClickNext() {
    if (this.state.index + 1 === this.state.picList.length) {
        this.setState({
            index: 0
        })
    } else {
        this.setState ({
            index: this.state.index + 1
        });
    }
}

onClickPrevious() {
    if (this.state.index - 1 === -1 ) {

        this.setState({
            index: this.state.picList.length - 1
        })
    } else { 
        this.setState ({
            index: this.state.index - 1
        });
    }
}


render() {
    return (
      <div>
        <body>
                <section className="section-photography">
                    <div className="row">
                        <div className="col-12 first-box">
                            <h2 className="salutations">Photography</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-span-1-of-2 photo-box">
                            <div className="photography-text">
                                <p>I enjoy taking pictures wherever I go. I take my pictures with the iPhone XR. From time to time I will be rotating out the pictures I have on display here!
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1-of-2 photo-box">
                        <img src={this.state.picList[this.state.index]} className="pic-gallery" alt="gallery" /> <br/>
                            <div id="button">
                                <button onClick={this.onClickPrevious} className="ui labeled icon button btn-previous"><i class="left arrow icon"></i> Previous </button>
                                <button onClick={this.onClickNext} className="ui right labeled icon button btn-next"><i class="right arrow icon"></i> Next</button>
                            </div>
                        </div>
                    </div>
                </section>
                    
                <section className="yerbamate-section">
                    <div className="row">
                        <div className="col-span-1-of-2 yerba-box">
                            <h2>Yerba Mate</h2> 
                            <figure className="yerba-pic">
                                <img src={yerbamate} alt="yerbamate" />
                            </figure>
                        </div>
                        <div className="col-span-1-of-2 yerba-box">
                        <div className="yerba-text">
                            When I went to Rio De Janeiro in 2010, I was introduced to yerba mate (Chimarrao)
                        </div>
                        </div>
                    </div>
                </section>

                </body>

      </div>
    );
  }
}

export default Hobbies;