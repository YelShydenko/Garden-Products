import React from 'react'
import './DailyProductCard.scss'
import Button from '../../UI/Button/Button'
import { useDispatch, useSelector } from 'react-redux';
import { IoMdHeart } from "react-icons/io";
import {addProductToCart, setFavourite, removeProductFromFavourite } from "../../../store/features/productSlice"


function DailyProductCard() {

  const dispatch = useDispatch()
  const { products, favourite } = useSelector(state => state.products);
	const currentDate = new Date().getDate();
	const productIndex = currentDate % products.length;
	const productOfTheDay = products[productIndex];
 
  
  const isProductFavourite = favourite.some((item) => item.id === productOfTheDay.id);
  const handleAddToCart = () => {
    dispatch(addProductToCart({...productOfTheDay, discont_price: productOfTheDay.price/2}))
  }
  const handleAddToFavorite= () => {
    const isInFavorite = favourite.find((value)=> value.id === productOfTheDay.id)
   if(!isInFavorite){
     dispatch(setFavourite({...productOfTheDay, discont_price: productOfTheDay.price/2}))
    return
  }
    dispatch(removeProductFromFavourite(productOfTheDay.id))  
}
 
  return (
    <div className='wrapper_modalCart'>
      <h2 className='title_productOfTheDay'>50% discount on product of the day!</h2>
      <div className='inner_wrapperModalCart'>
        <img src={`https://exam-server-5c4e.onrender.com${productOfTheDay.image} `} 
         alt={productOfTheDay.title}
          width={484}
         height={284} 
         className='img_dailyProduct'
         /> 
        <div className='price_info' > 
            <p className='discount_title'>{productOfTheDay.title}</p>
            <span className='discountPrice_productOfTheDay'>${(productOfTheDay.price/2).toFixed(2)}</span>
           <span className='originalPrice_productOfTheDay'>${productOfTheDay.price}</span>
        </div>
        <div className='favorite_productOfTheDay' onClick={handleAddToFavorite}>
          <IoMdHeart className={`icon ${isProductFavourite ? "icon__favourite" : ""}`} />
        </div>
        <div className='discount_dailyCart'>-50%</div>
      </div>
      <Button btnText={"Add to cart"} btnColor={"white"} btnSize={"XM"} handleOnClick={handleAddToCart} />
    </div>
  )
}

export default DailyProductCard
