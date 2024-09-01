import Skeleton from 'react-loading-skeleton'; 
import './ProductSkeleton.scss' 
 
const ProductSkeleton = () => { 
  return ( 
    <> 
      {Array(11) // создаем массив из 12 элементов 
        .fill(null) // заполняем массив null, чтобы на его основе создать элементы 
        .map((value, index) => ( 
          <div key={index} className="product-skeleton-item"> 
            <Skeleton className="skeleton-custom" /> 
          </div> 
        ))} 
    </> 
  ); 
} 
 
export default ProductSkeleton