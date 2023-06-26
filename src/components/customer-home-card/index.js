import React from 'react';
import { laptop_home } from '../../assets/images';
const CustomerHomeCard = ({
    image = laptop_home,
    title = 'Happy customers',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    style,
    descriptionBg = 'red'
}) => {
    return (
        <div className='col-md-4 mt-5 d-flex' style={{ ...style }}>
            <img src={image} alt='image here' style={{ height: '175px', width: '100%' }} />
            <div className='p-2' style={{ background: descriptionBg }}>
                <p style={{ fontSize: '18px', color: '#fff' }}>{title}</p>
                <p className='customer-detail' style={{ fontSize: '16px' }}>{description}</p>
            </div>
        </div>
    );
};
export default CustomerHomeCard;