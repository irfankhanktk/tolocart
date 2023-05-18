import React from 'react';
import { applestore, fb_footer, footer_insta, footer_log, footer_twitter, playstore, visa } from '../../assets/images/svgs';
const Footer = () => {
    return (
        <div>
            <div className='p-5 d-md-flex flex-row justify-content-between' style={{ background: '#FF5A0024' }}>
                <div>
                    <p style={{
                        fontFamily: 'Gilroy',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '32px',
                    }}>
                        Download App
                    </p>
                    <div>
                        <a href="https://example.com">
                            <img src={applestore} />
                        </a>
                        <a href="https://play.google.com/store/games">
                            <img src={playstore} className='mx-2' />
                        </a>
                    </div>
                </div>
                <div>
                    <p style={{
                        fontFamily: 'Gilroy',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '32px',
                    }}>
                        Payment Method
                    </p>
                    <div>
                        <a href="https://example.com">
                            <img src={visa} alt={'image here'} />
                        </a>
                        <a className='mx-2' href="https://example.com">
                            <img src={visa} alt={'image here'} />
                        </a>
                        <a href="https://example.com">
                            <img src={visa} alt={'image here'} />
                        </a>

                    </div>
                </div>
            </div>
            <div style={{ background: '#FF5A00' }}>
                <div className='d-md-flex p-5 align-items-center'>
                    <div className='col-md-6 d-md-flex'>
                        <img alt='image here' src={footer_log} />
                        <div className='d-flex p-md-5 mt-sm-2' >
                            {['Services', 'Safety', 'Aboout', 'Careers']?.map((item, index) => (
                                <p className='mx-2' style={{ color: '#fff' }}>{item}</p>
                            ))}
                        </div>
                    </div>
                    <div className='col-md-6 d-flex justify-content-end'>
                        <a href="https://example.com">
                            <img src={fb_footer} alt={'image here'} style={{ height: '30px', width: '30px' }} />
                        </a>
                        <a className='mx-2' href="https://example.com">
                            <img src={footer_insta} alt={'image here'} style={{ height: '30px', width: '30px' }} />
                        </a>
                        <a href="https://example.com">
                            <img src={footer_twitter} alt={'image here'} style={{ height: '30px', width: '30px' }} />
                        </a>
                    </div>
                </div>
                <div class="border border-white" />
                <div className='px-5 py-3 d-md-flex' style={{ background: '#FF5A00' }}>
                    <p className='col-md-6 text-white'>All Rights reserved. Tolocart Company © 2023</p>
                    <div className='col-md-6 d-md-flex justify-content-end'>
                        <p className='text-white mx-md-3'>All Rights reserved. Tolocart Company © 2023</p>
                        <a className='text-white'>Privacy policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;