import React from 'react'
import { useStateValue } from '../StateProvider'
import '../styles/CheckoutProduct.css'

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch ( {
            type : "REMOVE_FROM_BASKET",
            id : id,

        })
    }
  return (
    <div className='checkout-product'>
        <img className='checkout-product-image' src = {image} alt = ''/>

        <div className='checkout-product-info'>
            <p className='checkout-product-title'>{title}</p>
            <p className='checkout-product-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className='checkout-product-rating'>
                {
                Array(rating)
                    .fill()
                    .map((_, id) => {
                        return <p key={id}><i className="fa-regular fa-star fa-solid"></i></p>
                    })
                }
            </div>

            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
        
   </div>
  )
}

export default CheckoutProduct