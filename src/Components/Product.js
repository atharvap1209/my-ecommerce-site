import React from 'react'
import { useStateValue } from '../StateProvider'
import '../styles/Product.css'

function Product({id, title, image, price, rating}) {
    const [{}, dispatch] = useStateValue();
    const handleBasket = () => {
        // Add to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item : {
                id : id, 
                title : title, 
                image : image,
                price : price,
                rating : rating
            }
        })
    }

  return (
    <div className='product'>
        
        <div className='product-info'>
            <p>{title}</p>
            <p className='product-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product-rating'>
                {
                    Array(rating)
                    .fill()
                    .map((_, id) => {
                        return <p key={id}><i className="fa-regular fa-star fa-solid"></i></p>
                    })
                }
            </div>
        </div>
        <img src={image} alt=''/>
        <button onClick={handleBasket}>Add to basket</button>
        
    </div>
  )
}

export default Product