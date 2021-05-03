import React from 'react';
import './ProductPreview.css';
const ProductPreview = (props) => {
    return (
        <div className="proudct-preview">
            <img src={props.currentImage}/>
              {
                props.showHeartBeat ?
                <div className="heartbeatsection">
                <p>❤</p>
                <p>72</p>
                </div>
                :
                <p id="featureDate">{`${new Date().getHours()}:${new Date().getMinutes()}`}</p> 
              }
                   
        </div>
    );
};

export default ProductPreview;