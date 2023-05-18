import React from 'react';
import { home_bg } from '../../assets/images';
import AboutHome from '../../components/about-home';
import CustomerHomeCard from '../../components/customer-home-card/index';
import HomeServices from '../../components/home-services/index';
import { Container } from 'react-bootstrap';
import CateryCard from '../../components/category-card';
import CompaignCard from '../../components/compaign-card';
import FrequentlyQuestion from '../../components/frequently-question/index';
import BestReviewedCard from '../../components/best-reviewed-card';
const About = () => {

    return (
        <div>
            <img src={home_bg} style={{ width: '100%' }} />
            <p className='home-bg font-size-heavy'>Chose your best category</p>
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
                <div className='card-container' style={{ display: 'flex', overflow: 'scroll', flexWrap: 'nowrap' }}>
                    {[
                        { title: 'Groceries', bg: '#F8A44C1A', border: '#F8A44CB2' },
                        { title: 'Retail', bg: '#53B1751A', border: '#53B175B2' },
                        { title: 'Electronic', bg: '#D3B0E01A', border: '##D3B0E01A' },
                        { title: 'Groceries', bg: '#F8A44C1A', border: '#F8A44CB2' },
                    ]?.map((item, index) => (
                        <BestReviewedCard title={item?.title} bg={item?.bg} />
                    ))}
                </div>
            </div>
            <FrequentlyQuestion />
        </div>
    );
};
export default About;