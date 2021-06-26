import React from 'react';
import LoadBlogs from '../LoadBlogs/LoadBlogs';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <LoadBlogs></LoadBlogs>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;