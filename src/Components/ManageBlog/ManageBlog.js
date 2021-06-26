import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import RiseLoader from "react-spinners/RiseLoader";
import { css } from '@emotion/react';

const ManageBlog = () => {

    const override = css`
         margin: 0 auto;
    `;

    const [manageBlog, setManageBlog] = useState([]);
    const [showModal, setShowModal] = React.useState(false);

    useEffect(() => {
        fetch('https://nameless-bastion-98603.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setManageBlog(data);

            })
    }, [])

    const handleDelete = (id) => {
        id && fetch(`https://nameless-bastion-98603.herokuapp.com/blogs/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .then(error => {
                console.log(error)
            })
        alert("Service deleted successfully")
    }

    return (
        <div className="flex flex-row">
            <div flex flex-col w-64>
                <Dashboard />
            </div>
            <div className="flex flex-wrap sm:flex-grow-1 items-center justify-center mx-auto">
                {
                    manageBlog.length === 0 && <RiseLoader css={override} color='#808080'></RiseLoader>
                }
            </div>
            <div className='container flex flex-wrap'>
                {manageBlog.map(blog => {
                    return (
                        <div key={blog._id} className="p-6 md:w-1/2 lg:w-1/3 ">
                            <div className="shadow-xl  rounded-xl bg-blueGray-50 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 sm:w-full object-cover object-center" src={`data:image/png;base64,${blog?.image.img}`} alt="blog" />
                                <div className="p-6">
                                    {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{blog?.title}</h2> */}
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{blog?.title}</h1>
                                    <p className="mb-3 line-clamp-2">{blog?.content}</p>
                                    <div className="flex items-center flex-wrap bg-gray-200 rounded-b-xl">
                                        {/* <button
                                            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(true)}
                                        >
                                            Read More
                                        </button> */}
                                        <button
                                            className="bg-gray-500 text-gray-300 active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => handleDelete(blog._id)}
                                        >
                                            Delete
                                        </button>

                                    </div>
                                </div>
                            </div>

                            {showModal ? (
                                <>
                                    <div className="justify-center items-center flex flex-wrap overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none mt-5 pt-5 rounded">
                                        <div className="relative w-auto my-6 mx-auto max-w-6xl">
                                            {/*content*/}
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                {/*header*/}
                                                <div className="flex-col items-center w-full justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                    <img className="object-cover rounded-t w-full h-full pb-3" src={`data:image/png;base64,${blog.image.img}`} alt="" />
                                                    <h3 className="text-3xl px-5 font-semibold justify-center item-center">
                                                        {blog.title}
                                                    </h3>
                                                    <button
                                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                            ×
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*body*/}
                                                <div className="relative p-6 flex-auto">
                                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                        {blog.content}
                                                    </p>
                                                </div>
                                                {/*footer*/}
                                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                    <button
                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}

                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ManageBlog;