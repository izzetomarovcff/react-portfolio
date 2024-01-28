"use client";
import React, { useState } from 'react';

function EmailSection() {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [haveError, setHaveError] = useState(false);
    const firebaseUrl = 'https://portfolio-emails-c0cce-default-rtdb.firebaseio.com/emails.json';
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        fetch(firebaseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data sent to Firebase:', data);
                setEmailSubmitted(true)
            })
            .catch(error => {
                console.error('Error sending data to Firebase:', error);
                setEmailSubmitted(true)
                setHaveError(true)
            });
    };
    return (
        <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-9">
                <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <a href={"https://wa.me/994709161820"} target='_blank'>
                        <img src="images/contacticon/whatsapp.svg" alt="" className='contacticon' />
                    </a>
                    <a href={"https://instagram.com/omarov.99"} target='_blank'>
                        <img src="images/contacticon/instagram.svg" alt="" className='contacticon' />
                    </a>
                    <a href={"https://t.me/om4rov_99"} target='_blank'>
                        <img src="images/contacticon/telegram.svg" alt="" className='contacticon' />
                    </a>

                    <a href={"https://github.com/izzetomarovcff"} target='_blank'>
                        <img src="images/contacticon/github.svg" alt="" className='contacticon' />
                    </a>
                    <a href={"https://www.linkedin.com/in/izz%C9%99t-%C3%B6m%C9%99rov-94a131297/"} target='_blank'>
                        <img src="images/contacticon/linkedin.svg" alt="" className='contacticon' />
                    </a>
                </div>
            </div>
            <div>
                {emailSubmitted ? (haveError ? (<p className="bg-red-500 text-white font-medium py-2.5 px-5 rounded-lg w-full text-center">Error Try Again</p>) : (<p className="bg-green-500 text-white font-medium py-2.5 px-5 rounded-lg w-full text-center">Email sent successfully!</p>)) : (
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
                            <input name="email" type="email" id="email" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Example: izzetomarovcff@gmail.com" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">Subject</label>
                            <input name="subject" type="text" id="subject" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Example: New Project" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
                            <textarea name="message" id="message" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Let's talk about..." />
                        </div>
                        <button type="submit" className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">Send Message</button>
                    </form>
                )}
            </div>
        </section>
    )
}

export default EmailSection