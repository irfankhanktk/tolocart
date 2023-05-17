import React from 'react';
import { home_bg } from '../../assets/images';
import AboutHome from '../../components/about-home';
import CustomerHomeCard from '../../components/customer-home-card/index';
import HomeServices from '../../components/home-services/index';
import { Container } from 'react-bootstrap';
import CateryCard from '../../components/category-card';
import CompaignCard from '../../components/compaign-card';
const Home = () => {

    return (
        <div>
            <img src={home_bg} style={{ width: '100%' }} />
            <p className='home-bg'>Tolocart Everyday Needs</p>
            <HomeServices />
            <AboutHome />
            <Container className='d-flex  flex-wrap justify-content-between over-flow:hidden'>
                <CustomerHomeCard style={{ flexDirection: 'column-reverse' }} descriptionBg={'#FF5A00'} />
                <CustomerHomeCard style={{ flexDirection: 'column' }} descriptionBg={'#1BB504DE'} />
                <CustomerHomeCard style={{ flexDirection: 'column' }} descriptionBg={'#FF5A00'} />
            </Container>
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
        </div>
    );
};
export default Home;