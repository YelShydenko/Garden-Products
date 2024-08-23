import { useDispatch, useSelector } from "react-redux"; 
import "./ProductPage.scss"; 
import { useParams } from "react-router-dom"; 
import { 
  decrementProduct, 
  fetchProductsById, 
  incrementProduct, 
  addProductToCart, 
} from "@/store/features/productSlice"; 
import { useContext, useEffect, useState } from "react"; 
import { FiMinus, FiPlus } from "react-icons/fi"; 
import Button from "@/Components/UI/Button/Button"; 
import { IoMdHeart } from "react-icons/io"; 
import { ThemeContext } from "@/ThemeContext/ThemeContext"; 
import ZoomPhoto from "@/Components/ZoomPhoto/ZoomPhoto"; 
 
const ProductPage = () => { 
  const { productId } = useParams(); // Извлечение ID продукта из URL 
  const dispatch = useDispatch(); 
  const { product, cart } = useSelector((state) => state.products); // Доступ к данным продукта и корзины из Redux 
  const { theme } = useContext(ThemeContext); // Использование темы 
  const [count, setCount] = useState(1); // Состояние для управления количеством товара 
  const [isZoomed, setisZoomed] = useState(false); // Состояние для управления модальным окном изображения 
 
  // Загрузка данных продукта 
  useEffect(() => { 
    dispatch(fetchProductsById(productId)); 
  }, [productId, dispatch]); 
 
  // Обновление состояния количества на основе данных в корзине 
  useEffect(() => { 
    let cartFound = cart.find((item) => item.id === product?.id); 
    if (cartFound) { 
      setCount(cartFound.count); 
    } else { 
      setCount(1); 
    } 
  }, [cart, product]); 
 
  // Загрузочный экран, если данные продукта еще не загружены 
  if (!product) { 
    return <div>Loading...</div>; 
  } 
 
  // Функция для увеличения количества товара 
  const handleIncrement = () => { 
    let cartFound = cart.find((item) => item.id === product?.id); 
    if (cartFound) { 
      dispatch(incrementProduct(product.id)); 
    } else { 
      setCount(count + 1); 
    } 
   }; 
    
  // Функция для уменьшения количества товара 
  const handleDecrement = () => { 
    let cartFound = cart.find((item) => item.id === product?.id); 
    if (cartFound) { 
      dispatch(decrementProduct(product.id)); 
    } else { 
      setCount(count - 1); 
    } 
  }; 
 
  // Переключение видимости модального окна с увеличенным изображением 
  const toggleZoom = () => { 
    setisZoomed(!isZoomed); 
  }; 
 
  // Вычисление процента скидки 
  const discountPercentage = 
    product.discont_price && product.price 
      ? Math.round( 
          ((product.price - product.discont_price) / product.price) * 100 
        ) 
      : 0; 
 
  return ( 
    <section> 
      <div className="product__page"> 
        <div className="product__image" onClick={toggleZoom}> 
          <img 
            src={`https://exam-server-5c4e.onrender.com${product.image}`} 
            alt={product.title} 
          /> 
          {isZoomed && ( 
            <ZoomPhoto 
              productImage={`https://exam-server-5c4e.onrender.com${product.image}`} 
              imageDescription={product.title} 
            /> 
          )} 
        </div> 
        <div className="product__info"> 
          <div className="product__title-icon"> 
            <h3 className={`product__title title-${theme}`}>{product.title}</h3> 
            <IoMdHeart className={`icon icon-${theme}`} /> 
          </div> 
          <div className="product__pricing"> 
            {product.discont_price !== null && product.discont_price > 0 ? ( 
              <> 
                <div className="product__price-container"> 
                  <span className={`product__price price-${theme}`}> 
                    ${product.discont_price.toFixed(2)} 
                  </span> 
                  <span className="original__price"> 
                    ${product.price.toFixed(2)} 
                  </span> 
                </div> 
                <span 
                  className={`discount discount-${theme}`} 
                >{`-${discountPercentage}%`}</span> 
              </> 
            ) : ( 
              <span className={`product__price price-${theme}`}> 
                ${product.price.toFixed(2)}
                </span> 
            )} 
          </div> 
          <div className="counter__cart"> 
            <div className={`product__counter counter-${theme}`}> 
              <button className="counter__btn-icon" onClick={handleDecrement}> 
                <FiMinus /> 
              </button> 
              <span className="count">{count}</span> 
              <button className="counter__btn-icon" onClick={handleIncrement}> 
                <FiPlus /> 
              </button> 
            </div> 
            <div className="product__btn-container"> 
              <Button 
                btnColor={"green"} 
                btnSize={"M"} 
                btnText={"Add to cart"} 
                handleOnClick={() => 
                  dispatch(addProductToCart({ ...product, count })) 
                } 
              /> 
            </div> 
          </div> 
          <div className={`product__description description-${theme}`}> 
            <p className="description__title">Description</p> 
            <p className="description__body">{product.description}</p> 
          </div> 
        </div> 
      </div> 
    </section> 
  ); 
}; 
 
export default ProductPage;