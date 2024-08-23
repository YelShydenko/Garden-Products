import "./ZoomPhoto.scss" 
 
const ZoomPhoto = ({productImage, imageDescription}) => { 
  return ( 
    <div className="zoom__image-container"> 
      <img className="zoom__image" src={productImage} alt={imageDescription} /> 
    </div> 
  ) 
} 
 
export default ZoomPhoto