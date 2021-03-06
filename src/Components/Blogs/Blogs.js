import React from 'react';

const Blogs = ({ blog }) => {

    const [showModal, setShowModal] = React.useState(false);

    return (

        <>
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


            <div className="p-6 md:w-1/2 lg:w-1/3 ">
                <div className="shadow-xl  rounded-xl bg-blueGray-50 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 sm:w-full object-cover object-center" src={`data:image/png;base64,${blog?.image.img}`} alt="blog" />
                    <div className="p-6">
                        {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{blog?.title}</h2> */}
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{blog?.title}</h1>
                        <p className="mb-3 line-clamp-2">{blog?.content}</p>
                        <div className="flex items-center flex-wrap bg-gray-200 rounded-b-xl pr-1">
                            <button
                                className="bg-gray-500 text-gray-300 active:bg-pink-600 font-bold uppercase text-sm px-5 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(true)}
                            >
                                Read More
                            </button>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx={12} cy={12} r={3} />
                                </svg>1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                </svg>6
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Blogs;