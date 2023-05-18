import React from 'react';
import { laptop_home, review_img, review_plus } from '../../assets/images';
import { review_start } from '../../assets/images/svgs';
const BestReviewedCard = ({
    image = laptop_home,
    title = 'Groceries',
    style,
    bg = '#53B175B2',
    description = `Fresh
    FOOD every one
    Need`
}) => {
    return (
        <div className='col-md-2 col-sm-10 mt-5 px-1'>
            <div className='px-3 py-1 border rounded' style={{ ...style, background: `${bg}` }}>
                <div>
                    <img src={review_start} alt='image here' />
                    <span> 0.0</span>
                </div>
                <div className='text-center'>
                    <img className='img-fluid' src={review_img} alt='image here' />
                </div>
                <p className='font-size-normal m-0'>{title}</p>
                <p className='font-size-small color-white-50 m-0'>{3.5} oz</p>
                <p className='font-size-small' style={{ color: '#1F9F0C' }}>In stock</p>
                <div className='position-relative d-flex justify-content-between align-items-center'>
                    <div className='bg-info rounded px-3 py-1 h-auto'>
                        <span>23$</span>
                        <span className='font-size-small position-absolute translate-middle-y mt-1'>34</span>
                    </div>
                    <img className='img-fluid' src={review_plus} alt='image here' />
                </div>
            </div>
        </div>

    );
};
export default BestReviewedCard;