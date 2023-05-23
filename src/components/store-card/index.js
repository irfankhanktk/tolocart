import React from 'react';
import StoreCardHeader from '../store-card-header';
import StoreRating from '../store-rating';
import './style.css'
const StoreCard = ({
    item
}) => {
    return (
        <div className='col-md-4 mt-3  px-3'>
            <div className='main-container'>
                <StoreCardHeader bg={item?.bg} title={item?.title} style={{ height: '75px' }} imgHeight={'66px'} />
                <StoreRating />
            </div>
        </div>
    );
};
export default StoreCard;