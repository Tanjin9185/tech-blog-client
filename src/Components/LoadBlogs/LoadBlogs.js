import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import RiseLoader from "react-spinners/RiseLoader";
import Blogs from "../Blogs/Blogs";

const LoadBlogs = () => {

    const override = css`
         margin: 0 auto;
    `;

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://nameless-bastion-98603.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                console.log("datfgfffa", data)
                setBlogs(data)
            })
    }, [])


    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap sm:flex-grow-1 sm:pl-6">
                {
                    blogs.length === 0 && <RiseLoader css={override} color='#808080'></RiseLoader>
                }
                {
                    blogs.map(blog => <Blogs blog={blog} ></Blogs>)
                }
            </div>


        </div>
    );
};

export default LoadBlogs;