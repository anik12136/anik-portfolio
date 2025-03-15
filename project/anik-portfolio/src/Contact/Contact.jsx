import { FaFacebookMessenger, FaLocationArrow } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

    const notify = () => toast('Email send successfully.');


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_rm5ikbq', 'template_mcdp8yn', form.current, {
                publicKey: 'M3wjAQFzDAXoav-Xb',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    notify ();
                    <Toaster/>

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div id='contact' className='md:lg:my-20 md:mx-40 mx-2 pt-2 md:lg:pt-20 '>
            <div className='mb-10'>
                <h2 className='flex justify-center md:text-5xl text-3xl font-extrabold'>Contact With Me</h2>
                <h2 className='flex justify-center md:text-5xl text-3xl font-extrabold rotate-180  text-gray-600 opacity-30'>eM htiW tcatnoC</h2>
            </div>

            <div className="  md:lg:py-10 pb-20">
                <div className="md:lg:flex md:lg:flex-row-reverse items-center gap-10">
                    <div className="text-center lg:text-left md:ms-10 md:lg:grid gap-y-24">
                        <h1 className="text-5xl font-bold text-sky-400">feel free to drop a message.</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p> */}
                        <div className=' text-base-500 '>
                            <div className='flex gap-6 '>
                                <h2 className='mt-1'><FaLocationArrow></FaLocationArrow></h2>
                                <h2>Dhaka, Bangladesh</h2>
                            </div>
                            <div className='flex gap-6'>
                                <h2 className='mt-1'><FiPhoneCall></FiPhoneCall></h2>
                                <h2>+8801721383204</h2>
                            </div>
                            <div className='flex gap-6 text-'>
                                <h2 className='mt-1'><GrMail></GrMail></h2>
                                <h2>Priyosaha110@gmail.com</h2>
                            </div>
                        </div>
                        <div className='flex gap-4 my-5'>
                            <a href="https://www.linkedin.com/in/anik-biswas-aa1586282/"><img className='h-10 w-10' src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" /></a>
                            <a href="https://www.facebook.com/anickbiswas.antor/"><img className='h-10 w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" /></a>
                            <a href="https://www.instagram.com/a_nto_r/"><img className='h-10 w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png" alt="" /></a>
                            {/* <a href=""><img className='h-10 w-10' src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="" /></a> */}
                            <a href="https://github.com/anik12136"><img className='h-10 w-10' src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" alt="" /></a>
                            {/* <a href=""><img className='h-10 w-10' src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png" alt="" /></a> */}
                            <a href="https://api.whatsapp.com/send?phone=+8801721383204"><img className='h-10 w-10' src="https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889687-whats-app_82529.png" alt="" /></a>
                            <a href="https://m.me/anickbiswas.antor"><FaFacebookMessenger className='h-10 w-10'></FaFacebookMessenger></a>
                        </div>
                    </div>



                    <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-400 rounded-sm">

                        {/* form---------------------- */}

                        <form ref={form} onSubmit={sendEmail}
                            className='grid px-5 '>

                            <label className='pt-5 pb-1 text-black'>Name</label>
                            <input type="text" name="user_name" className='p-2 rounded-md h-10 bg-black'/>
                            
                            <label className='pt-3 pb-1 text-black'>Email</label>
                            <input type="email" name="user_email" className='p-2 rounded-md h-10 bg-black'/>
                        
                            <label className='pt-3 pb-1 text-black'>Message</label>
                            <textarea name="message" className='h-40 p-2 rounded-md text-sm bg-black'/>
                         
                            <input  type="submit" value="Send" className='btn hover:bg-white my-3 hover:text-black '/>

                        </form>

                        {/* <form className="card-body" ref={form} onSubmit={sendEmail}>
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
                               
                                <textarea name="" id="" cols="30" rows="10">

                                </textarea>
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' value="Send" className="btn btn-primary">Submit</button>
                            </div>
                        </form> */}


                    </div>
                </div>
            </div>
        </div>
    );
};
<h2>contact</h2>
export default Contact;