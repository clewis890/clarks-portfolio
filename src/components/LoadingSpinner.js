import React from 'react';
import Loader from 'react-loader-spinner';

class LoadingSpinner extends React.Component {
    render() {
        return (
           <div>
                <Loader
                type="TailSpin"
                color="#00BFFF"
                height={200}
                width={200}
                timeout={6000}
                className="loader"
                />
            </div>
        )
    };
}

export default LoadingSpinner;
