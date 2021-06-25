

// const Contact = () => {

//     
//     // const sendEmail = (e) => {
//     //     e.preventDefault();

//     //     emailjs.sendForm('service_yyv8a2g', 'template_ow7c2z7',
//     //         e.target, 'user_9IxxUymdRdJFJgd2Am2l3')
//     //         .then((result) => {
//     //             console.log(result.text);
//     //         }, (error) => {
//     //             console.log(error.text);
//     //         });

//     //     e.target.reset();
//     //     setResult(true);
//     // }
//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_jbc6t6b', 'template_xxt8olt', e.target, 'user_9IxxUymdRdJFJgd2Am2l3')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//     }

//     //hide results
//     setTimeout(() => {
//         setResult(false);
//     }, 5000)
//     

import React, { useState } from "react";
// import React, { useState } from 'react';
import emailjs from "emailjs-com";

const Result = () => {
    return (
        <div>
            <p>Your message has been sent successfully. I will contact you soon.</p>
        </div>
    );
};

const Contact = () => {

    const [result, setResult] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_jbc6t6b",
                "template_xxt8olt",
                e.target,
                "user_9IxxUymdRdJFJgd2Am2l3"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        setResult(true);
    };

    //hide results
    setTimeout(() => {
        setResult(false);
    }, 4000)

    return (
        <section className="py-6 my-8 bg-dark border-8 border-gray-200 rounded-md shadow-md dark:bg-gray-800 text-black">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>Dhaka-1211, Bangladesh</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span>+8801619980401</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span>tanjin.ahamed123@gmail.com</span>
                        </p>
                    </div>
                </div>
                <form onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input name="name" type="text" placeholder="Tanjin Ahamed" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-200" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input name="email" type="email" placeholder="tech-blog@gmail.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-800 bg-gray-200" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Phone Number</span>
                        <input name="phone" type="text" placeholder="+8801xxxxxxxxx" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-800 bg-gray-200" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea name="message" rows={3} className="block w-full rounded-md focus:ring focus:ring-opacity-50 focus:ring-violet-600 bg-gray-200" defaultValue={""} />
                    </label>
                    <button type="submit" className="mr-5 w-full bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">Submit</button>
                    <div className="">
                        {
                            result ? <Result></Result> : null
                        }
                    </div>
                </form>

            </div>
        </section>

    );
};

export default Contact;