import React from 'react';
import Loader from 'react-loader-spinner';

class LoadingSpinner extends React.Component {
    render() {
        return (
           <div>
                <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
                />
            </div>
        )
    };
}

export default LoadingSpinner;
