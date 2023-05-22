import React from 'react';
import { home_bg } from '../../assets/images';
import BestReviewedCard from '../../components/best-reviewed-card';
import CateryCard from '../../components/category-card';
import CompaignCard from '../../components/compaign-card';
import FrequentlyQuestion from '../../components/frequently-question/index';
import BestReviewedCard from '../../components/best-reviewed-card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const About = () => {

    return (
        <div>
            <img src={home_bg} style={{ width: '100%' }} />
            <p className='home-bg font-size-heavy'>Choose your best category</p>
            <div className='mx-5'>
                <div className='card-container' style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    {[
                        { title: 'Groceries', bg: '#F8A44C1A', border: '#F8A44CB2' },
                        { title: 'Retail', bg: '#53B1751A', border: '#53B175B2' },
                        { title: 'Electronic', bg: '#D3B0E01A', border: '##D3B0E01A' },
                        { title: 'Groceries', bg: '#F8A44C1A', border: '#F8A44CB2' },
                        { title: 'Retail', bg: '#53B1751A', border: '#53B175B2' },
                        { title: 'Electronic', bg: '#D3B0E01A', border: '##D3B0E01A' },
                        { title: 'Groceries', bg: '#F8A44C1A', border: '#F8A44CB2' },
                        { title: 'Retail', bg: '#53B1751A', border: '#53B175B2' },
                        { title: 'Electronic', bg: '#D3B0E01A', border: '##D3B0E01A' },
                        { title: 'Groceries', bg: '#F8A44C1A', border: '#F8A44CB2' },
                        { title: 'Retail', bg: '#53B1751A', border: '#53B175B2' },
                        { title: 'Electronic', bg: '#D3B0E01A', border: '##D3B0E01A' },
                    ]?.map((item, index) => (
                        <CateryCard title={item?.title} border={item?.border} bg={item?.bg} />
                    ))}
                </div>
            </div>
            <p className='home-bg font-size-heavy'>Daily campaigns comfort your life</p>
            <div className='mx-5'>
                <div className='card-container' style={{ display: 'flex', justifyContent: 'space-between', overflow: 'scroll', flexWrap: 'nowrap' }}>
                    {[
                        { title: 'Groceries', bg: '#F8A44C1A', border: '#F8A44CB2' },
                        { title: 'Retail', bg: '#53B1751A', border: '#53B175B2' },
                        { title: 'Electronic', bg: '#D3B0E01A', border: '##D3B0E01A' },
                        { title: 'Groceries', bg: '#F8A44C1A', border: '#F8A44CB2' },

                    ]?.map((item, index) => (
                        <CompaignCard title={item?.title} bg={item?.bg} />
                    ))}
                </div>
            </div>
            <p className='home-bg font-size-heavy'>Best Reviewed items which sale faster</p>
            <div className='mx-5'>
                {/* <div className='card-container' style={{ display: 'flex', overflow: 'scroll', flexWrap: 'nowrap' }}>
                    {[
                        { title: 'Groceries', bg: '#F8A44C1A', border: '#F8A44CB2' },
                        { title: 'Retail', bg: '#53B1751A', border: '#53B175B2' },
                        { title: 'Electronic', bg: '#D3B0E01A', border: '##D3B0E01A' },
                        { title: 'Groceries', bg: '#F8A44C1A', border: '#F8A44CB2' },
                    ]?.map((item, index) => (
                        <BestReviewedCard title={item?.title} bg={item?.bg} />
                    ))}
                </div> */}
                <div className='card-container' >
                    <Slider
                        dots={false}
                        infinite={true}
                        speed={500}
                        slidesToShow={4}
                        slidesToScroll={1}
                        className='card-slider'
                        responsive={[
                            {
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 4,
                                },
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 3,
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                },
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                },
                            },
                        ]}
                    >
                        {/* className='card-slider'> */}
                        {[
                            { title: 'Groceries', bg: '#F8A44C1A', border: '#F8A44CB2' },
                            { title: 'Retail', bg: '#53B1751A', border: '#53B175B2' },
                            { title: 'Electronic', bg: '#D3B0E01A', border: '##D3B0E01A' },
                            { title: 'Groceries', bg: '#F8A44C1A', border: '#F8A44CB2' },
                        ].map((item, index) => (
                            <BestReviewedCard key={index} title={item?.title} bg={item?.bg} />
                        ))}
                    </Slider>
                </div>
            </div>

            <FrequentlyQuestion />
        </div>
    );
};
export default About;