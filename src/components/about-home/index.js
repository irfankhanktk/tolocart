import React from 'react';
import { PrimaryButton } from '../buttons';
import { laptop_home } from '../../assets/images';
const AboutHome = () => {
    return (
        <div className='about-home p-3 d-md-flex flex-row justify-content-between'>
            <div className='col-md-6'>
                <h2>About</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <PrimaryButton onClick={() => { }} />
            </div>
            <div className='col-md-6 d-flex justify-content-md-end'>
                <img src={laptop_home} alt='latop img here' className='laptop-image' />
            </div>
        </div>
    );
};
export default AboutHome;