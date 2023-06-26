import React from 'react';
import { PrimaryButton } from '../buttons';
import { laptop_home } from '../../assets/images';
import './style.css'
const AboutHome = () => {
    return (
        <div className='about-home row m-0 justify-content-between'>
            <div className='col-md-6'>
                <h2 className='csm-element-title'>About Us</h2>
                <p className='about-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <PrimaryButton onClick={() => { }} />
            </div>
            <div className='col-md-4'>
                <img src={laptop_home} alt='latop img here' className='laptop-image' />
            </div>
        </div>
    );
};
export default AboutHome;