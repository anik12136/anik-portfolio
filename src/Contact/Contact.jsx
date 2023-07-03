import React from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
const Contact = () => {

    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('service_rm5ikbq', 'template_mcdp8yn', form.current, 'M3wjAQFzDAXoav-Xb')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };


    return (
        <div id='contact' className='md:mx-40 mx-2 mt-10'>
            <h2 className='flex justify-center text-5xl'>Contact With Me</h2>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left md:ms-10">
                        <h1 className="text-5xl font-bold">feel free to drop a message.</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div >
                            <div className='flex gap-6'>
                                <h2>Location</h2>
                                <h2>Dhaka, Bangladesh</h2>
                            </div>
                            <div className='flex gap-6'>
                                <h2>call</h2>
                                <h2>+8801721383204</h2>
                            </div>
                            <div className='flex gap-6'>
                                <h2>Mail</h2>
                                <h2>anikbiswas431@gmail.com</h2>
                            </div>
                        </div>
                        <div className='flex gap-4 my-5'>
                            <a href="https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.linkedin.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2F%3Foriginal_referer%3Dhttp%253A%252F%252Flocalhost%253A3000%252F"><img className='h-10 w-10' src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" /></a>
                            <a href="https://www.facebook.com/anickbiswas.antor/"><img className='h-10 w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" /></a>
                            <a href="https://www.instagram.com/a_nto_r/"><img className='h-10 w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png" alt="" /></a>
                            <a href=""><img className='h-10 w-10' src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="" /></a>
                            <a href="https://github.com/anik12136"><img className='h-10 w-10' src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" alt="" /></a>
                            <a href=""><img className='h-10 w-10' src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png" alt="" /></a>
                            <a href="https://api.whatsapp.com/send?phone=+8801721383204"><img className='h-10 w-10' src="https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889687-whats-app_82529.png" alt="" /></a>
                            <a href="https://m.me/anickbiswas.antor"><FaFacebookMessenger className='h-10 w-10'></FaFacebookMessenger></a>
                        </div>
                    </div>



                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-400">

                        
                        {/* <form ref={form} onSubmit={sendEmail} className="card-body"> */}
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your email" className="input input-bordered" />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Massage</span>
                                </label>
                                <textarea name="message" id="message" rows="7" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." spellcheck="false">
                                </textarea>
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' value="send" className="btn btn-primary">Submit</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};
<h2>contact</h2>
export default Contact;