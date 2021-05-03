import './App.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetailsData from './ProductDetails/ProductDetailsData';
import TopBar from './TopBar/TopBar';
import React from 'react';
import ProductData from './ProductData/productdata';

class App extends React.Component{
  state={
    productdata : ProductData,
    currentImage : "https://imgur.com/iOeUBV7.png",
    showHeartBeat : false      
  }
  /** on color button click  */
  onColorButtonClick=(pos)=>{
    const updatedProductImage = this.state.productdata.colorOptions[pos].imageUrl;
    console.log(updatedProductImage);
    this.setState({currentImage : updatedProductImage });

  }
  /**to get the heart beat or time  */
  onClickGetHeartbeat=(pos)=>{
    let updatedValue= false;
    console.log(updatedValue);
    if (pos === 1){
      updatedValue =true;
    }
    this.setState({showHeartBeat : updatedValue})
  }
  render() {
    return (
      
        <div className="App">
          <header className="App-header">
                  <TopBar/>
               <div className="main-container">
                 <div className="product-preview" >
                    <ProductPreview currentImage={this.state.currentImage} showHeartBeat={this.state.showHeartBeat}/>
                 </div>
                  <ProductDetailsData data={this.state.productdata}
                                      onColorButtonClick={this.onColorButtonClick}
                                      onClickGetHeartbeat={this.onClickGetHeartbeat}
                  />
               </div>
    
          </header>
        </div>
      
    );
  }
 
}

export default App;
