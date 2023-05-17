import React from 'react';
import { home_bg, vegetable } from '../../assets/images';
const HomeServices = () => {
    return (
        <div>
            <div className='row mx-md-5  mx-lg-5 mx-xl-5 justify-content-between'>
                <div className='market-place col-md-4 col-sm-12 my-2'>
                    <p className='market-place-text'>Marketplace</p>
                    <img src={vegetable} alt='img here' className='vegetable-img' />
                </div>
                <div className='services col-md-7 col-sm-12 my-2 d-flex'>
                    <p className='service-text'>Parcel Delivery</p>
                </div>
            </div>
            <div className='row mx-md-5  mx-lg-5 mx-xl-5 justify-content-between'>
                <div className='services col-md-4 my-2 d-flex' style={{ height: '394px' }}>
                    <p className='service-text'>Pharmacy</p>
                </div>
                <div className='col-md-7 d-flex flex-column justify-content-between' style={{ padding: 0 }}>
                    {/* <div style={{ display: 'flex', flexDirection: 'column', height: '300px' }}> */}
                    <div className='services  d-flex my-2' style={{ height: '170px', }}>
                        <p className='service-text'>Restaurant</p>
                    </div>
                    <div className='services  d-flex my-2' style={{ height: '170px', }}>
                        <p className='service-text'>Doctor Consultant </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeServices;