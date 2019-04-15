import React from 'react';

import './Loader.css'

class Loader extends React.Component {


    render() {
        return (
            <div className="container-loader">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
}

export default Loader;