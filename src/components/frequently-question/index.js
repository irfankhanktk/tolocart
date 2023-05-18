import React from 'react';
import { laptop_home } from '../../assets/images';
import { fr_plus } from '../../assets/images/svgs';
const FrequentlyQuestion = ({
}) => {
    return (
        <div className='mt-5 p-3' style={{ background: '#1F9F0C0F' }}>
            <p className='text-center' style={{ fontSize: '20px' }}>Frequently Asked Questions</p>
            <div className='d-flex flex-row align-items-center justify-content-between mx-5 border-bottom'>
                <p className=''>Frequently Asked Questions</p>
                <img src={fr_plus} />
            </div>
            <div className='d-flex flex-row align-items-center justify-content-between mx-5 border-bottom'>
                <p className=''>Frequently Asked Questions</p>
                <img src={fr_plus} />
            </div>
            <div className='d-flex flex-row align-items-center justify-content-between mx-5 border-bottom'>
                <p className=''>Frequently Asked Questions</p>
                <img src={fr_plus} />
            </div>
        </div>

    );
};
export default FrequentlyQuestion;