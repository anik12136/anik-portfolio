import { FaFacebookMessenger, FaLocationArrow } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const notify = () => toast.success('Email sent successfully!');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_rm5ikbq', 'template_mcdp8yn', form.current, {
                publicKey: 'M3wjAQFzDAXoav-Xb',
            })
            .then(
                () => {
                    notify();
                    form.current.reset(); // Clear input fields
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    toast.error('Failed to send email. Please try again.');
                }
            );
    };

    return (
        <div  className='md:lg:my-10 md:mx-40 mx-2 pt-2 md:lg:pt-20'>
            <Toaster />
            <div id='contact'  className='text-center'>
                <h2 className='text-5xl mb-10 font-extrabold pt-20'>Contact With Me</h2>
                <h2 className='transform scale-y-[-1] text-5xl mb-10 font-extrabold -mt-10 text-gray-600 opacity-30'>Contact With Me</h2>
            </div>

            <div className='md:lg: pb-20'>
                <div className='md:lg:flex md:lg:flex-row-reverse items-center gap-10'>
                    <div className='text-center lg:text-left md:ms-10 md:lg:grid gap-y-24'>
                        <h1 className='text-5xl font-bold text-sky-400'>Feel free to drop a message.</h1>
                        <div className='text-base-500'>
                            <div className='flex gap-6'>
                                <h2 className='mt-1'><FaLocationArrow /></h2>
                                <h2>Dhaka, Bangladesh</h2>
                            </div>
                            <div className='flex gap-6'>
                                <h2 className='mt-1'><FiPhoneCall /></h2>
                                <h2>+8801721383204</h2>
                            </div>
                            <div className='flex gap-6'>
                                <h2 className='mt-1'><GrMail /></h2>
                                <h2>anikbiswas431@gmail.com</h2>
                            </div>
                        </div>

                        <div className='flex gap-4 my-5'>
                            <a href="https://www.linkedin.com/in/anik-biswas-aa1586282/"><img className='h-10 w-10 hover:scale-150' src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" /></a>
                            <a href="https://www.facebook.com/anickbiswas.antor/"><img className='h-10 w-10 hover:scale-150' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" /></a>
                            <a href="https://www.instagram.com/a_nto_r/"><img className='h-10 w-10 hover:scale-150' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png" alt="" /></a>
                            {/* <a href=""><img className='h-10 w-10' src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="" /></a> */}
                            <a href="https://github.com/anik12136?tab=repositories"><img className='h-10 w-10 hover:scale-150' src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" alt="" /></a>
                            {/* <a href=""><img className='h-10 w-10' src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png" alt="" /></a> */}
                            {/* <a href="https://api.whatsapp.com/send?phone=+8801721383204"><img className='h-10 w-10 hover:scale-150' src="https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889687-whats-app_82529.png" alt="" /></a> */}
                            <a href="https://m.me/anickbiswas.antor"><FaFacebookMessenger className='h-10 w-10 text-sky-400 hover:scale-150'></FaFacebookMessenger></a>
                        </div>
                    </div>

                    <div className='w-full max-w-sm rounded-md shadow-lg shadow-sky-300'>
                        <form ref={form} onSubmit={sendEmail} className='grid px-5'>
                            <label className='pt-5 pb-1 text-white'>Name</label>
                            <input type='text' name='user_name' required className='p-2 h-10 bg-slate-600 text-white rounded-lg shadow-md shadow-sky-300' />

                            <label className='pt-3 pb-1 text-white'>Email</label>
                            <input type='email' name='user_email' required className='p-2 h-10 bg-slate-600 text-white rounded-lg shadow-md shadow-sky-300' />

                            <label className='pt-3 pb-1 text-white'>Message</label>
                            <textarea name='message' required className='p-2 h-40 bg-slate-600 text-white rounded-lg shadow-md shadow-sky-300'></textarea>

                            <input type='submit' value='Send' className='my-7 p-2 h-10 bg-slate-600 text-white rounded-lg shadow-md shadow-sky-300 hover:bg-white hover:text-black' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
