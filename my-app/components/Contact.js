import React from 'react'
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser'



function ContactComponent() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", number: "", message: "" });
    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send(
            "service_9wfr8fh",
            "template_2a4u4lv",
            {
                from_name: form.name,
                to_name: "Project_team-3",
                from_email: form.email,
                to_email: "noobragang311@gmail.com",
                message: form.message,
            },
            "pbFRe0ViZftzD7JjN"
        ).then(() => {
            setLoading(false);
            setForm({ name: "", email: "", number: "", message: "" });
        }).catch((error) => {
            setLoading(false);
            console.log(error);

        })
    }




    const handleFocus = () => { }
    const handleBlur = () => { }

    return (
        <div className='flex total m-3'>
            <div className='p-1 left-side mt-4 rounded-lg'>
                <h1 className='head-text text-center text-gray-300'>Contact info</h1>
                <p className="text-gray-300 mt-3 p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis libero perspiciatis aperiam iure harum obcaecati cumque eos earum repellat inventore.</p>
                <div className='m-5 flex justify-center flex-col gap-10'>
                    <p className='flex items-center justify-start text-slate-200 gap-3'><a className="text-white">
                        <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-10 h-10"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                        </svg>
                    </a>
                        <p>mckviecse2024@gmail.com</p>
                    </p>
                    <p className='flex items-center justify-start text-slate-200 gap-3'>
                        <a className="text-white">
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-10 h-10"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path><path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path>
                            </svg>
                        </a>
                        <p>9876543210</p>
                    </p>
                    <p className='flex items-center justify-start text-slate-200 gap-3'>
                        <a className="text-white">
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-10 h-10"
                                viewBox="0 0 24 24"
                            >
                                <path d="M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z"></path><path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"></path>
                            </svg>
                        </a>
                        <p>Howrah,West Bengal</p>
                    </p>
                </div>
                {/* social Links */}
                <div className="f" >
                    <div className="flex flex-wrap py-3 justify-start ml-4">
                        <a className="text-white hover:bg-pink-400 focus:bg-pink-400 rounded-lg p-2">
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white hover:bg-pink-400 focus:bg-pink-400 rounded-lg p-2 ">
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white hover:bg-pink-400 focus:bg-pink-400 rounded-lg p-2">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white hover:bg-pink-400 focus:bg-pink-400 rounded-lg p-2">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="0"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                ></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className='right-side'>
                <section className='relative flex lg:flex-row flex-col max-container'>
                    <div className='flex-1 min-w-[50%] flex flex-col'>
                        <h1 className='head-text'>Get in Touch</h1>
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className='w-full flex flex-col gap-2 mt-4'
                        >
                            <label className='text-black-500 font-semibold'>
                                Name
                                <input
                                    type='text'
                                    name='name'
                                    className='input'
                                    placeholder='Enter Name'
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </label>
                            <label className='text-black-500 font-semibold'>
                                Email
                                <input
                                    type='email'
                                    name='email'
                                    className='input'
                                    placeholder='mckvcse2024@gmail.com'
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </label>

                            <label className='text-black-500 font-semibold'>
                                Contact No
                                <input
                                    type='tel'
                                    name='number'
                                    className='input'
                                    placeholder='1234567890'
                                    required
                                    value={form.number}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}

                                />

                            </label>

                            <div className='flex flex-col lg:flex-row gap-3 justify-center'>
                                <input type="radio" value="Web Design" name="g" />Web Design
                                <input type="radio" value="Web Development" name="g" />Web Development
                                <input type="radio" value="Logo Design" name="g" />Logo Design
                                <input type="radio" value="Other" name="g" /> Other
                            </div>


                            <label className='text-black-500 font-semibold'>
                                Your Message
                                <textarea
                                    name='message'
                                    rows='4'
                                    className='textarea'
                                    placeholder='Write your thoughts here...'
                                    value={form.message}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />

                            </label>
                            <button
                                type='submit'
                                disabled={loading}
                                className='btn'
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            >
                                {loading ? "Sending..." : "Submit"}
                            </button>
                        </form>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default ContactComponent;