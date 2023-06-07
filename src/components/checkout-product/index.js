import React from 'react';
import StoreCardHeader from '../store-card-header';
import StoreRating from '../store-rating';
import './style.css'
import RatingStars from '../rating-stars';
import { Checkout_img, popular_img, review_plus } from '../../assets/images';
import ProductCounter from '../counter';
const CheckoutProduct = ({
    item
}) => {
    return (
        <>
        <div className='card-product'>
            <div className='row m-0'>
                <div className='col-md-4'>
                    <img src={Checkout_img}/>
                </div>
                <div className='col-md-6'>
                    <div className='title_heading'>
                        <h2>Red Apple</h2>
                        <h3>$ 3.49 / lb</h3>
                        <ProductCounter/>
                        <a href="#" className='add-instruction'><i class="fa fa-pencil" aria-hidden="true"></i> Add Instruction</a>
                    </div>
                </div>
                <div className='col-md-2 d-flex align-items-end justify-content-between flex-column'>
                    <i class="fa fa-times" aria-hidden="true"></i>
                    <div className="checkout-price h-auto ">
                        <span>$2</span>
                        <p className="mb-2">49</p>
                    </div>
                </div>
                <div className='col-md-12 d-flex align-items-center justify-content-between'>
                    <div className='gift-order'>
                        <h2><i class="fa fa-gift" aria-hidden="true"></i> Make this order a gift</h2>
                    </div>
                    <div class="check-box">
                        <input type="checkbox"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default CheckoutProduct;