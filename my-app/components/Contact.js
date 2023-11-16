import React from 'react'
import { useState } from "react";
function ContactComponent() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const handleChange = () => { };
    const handleFocus = () => { };
    const handleBlur = () => { };
    return (
        <section className='relative flex lg:flex-row flex-col max-container'>
            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='head-text'>Get in Touch</h1>
                <form
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
                            value={form.email}
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
                        className='btn'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        Click me
                    </button>
                </form>
            </div>

        </section>
    )
}

export default ContactComponent;