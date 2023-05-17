import React from 'react';
import { laptop_home } from '../../assets/images';
const CompaignCard = ({
    image = laptop_home,
    title = 'Groceries',
    style,
    bg = '#53B175B2',
    description = `Fresh
    FOOD every one
    Need`
}) => {
    return (
        <div className='col-6 mt-5 px-1'>
            <div className='p-1' style={{ ...style, background: `${bg}` }}>
                <p className='text-start' style={{ fontSize: '32px', color: '#000' }}>{title}</p>
                <div className='p-3 d-flex rounded justify-content-between align-items-center'>
                    <p className='text-start' style={{ fontSize: '24px', color: '#000' }}>{description}</p>
                    <img className='w-50 h-75' src={image} alt='image here' />
                </div>
            </div>
        </div>

    );
};
export default CompaignCard;