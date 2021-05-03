import React from 'react';
import './ProductDetailsdata.css';


const ProductDetailsData = (props) => {
    const colorOptions = props.data.colorOptions.map((item,pos)=>{
        
        return (
            <img key={pos} className="product-image" src={item.imageUrl} 
                onClick={()=> props.onColorButtonClick(pos)}/>
        );
    })
    console.log(props.data);
    const featureList = props.data.featureList.map((item,pos) =>{
      return(
        <button key={pos} className="item" onClick={()=>props.onClickGetHeartbeat(pos)}>{item}</button>
        
      );
    })
    return (
        <div className="product-data">
                  <h1 className="title">{props.data.title}</h1>
                  <p className="description">{props.data.description}</p>
                  <h3 className="selectoption">Select Option</h3>
                  <div>
                    {colorOptions}
                  </div>
                  <h3 className="selectoption">Features</h3>
                  <div className="features">
                    {featureList}
                  </div>
                  <button className="buy-button">Buy Now</button>

             </div>
             
    );
};

export default ProductDetailsData;