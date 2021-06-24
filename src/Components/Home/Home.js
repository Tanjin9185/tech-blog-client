import React from 'react';
import Navbar from '../Navbar/Navbar';
import LoadBlogs from '../LoadBlogs/LoadBlogs';
// import Blogs from './Components/Blogs/Blogs';
// import Footer from './Components/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <LoadBlogs></LoadBlogs>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;