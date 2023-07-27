import React from 'react';
import Resume from '../Assets/Resume/Resume';
import './Banner.css';
// import myphoto from '../Assets/MyPhoto/hero.png';
import myphoto from '../Assets/MyPhoto/anik.JPG';
import HeaderSocial from '../HeaderSocial/HeaderSocial';
import { BiPhoneCall } from 'react-icons/bi';
import HeaderSocial2 from '../Header/HeaderSocial2/HeaderSocial2';
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const Banner = () => {

    const [text] = useTypewriter({
        words: ['Front-End Developer ', 'MERN Stack Developer', 'Graphics Designer',],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 20,
        delaySpeed: 1500,

    });


    return (
        <div className='banner_container md:mx-40'>
            <div className='text-center'>
                <div>
                    <h5 className='pt-16 mb-5'></h5>
                    <h1 className='text-5xl font-extrabold'><span>Hi, I'm </span> <span className='text-sky-400'> Anik Biswas</span></h1>
                    <h3 className='mt-3 text-3xl font-extrabold'><span className='text-sky-400'>a</span> <span className=''>{text}</span> <span className=''><Cursor cursorColor='red' /></span></h3>
                    
                </div>
                <div className='flex justify-center space-x-4 my-10'>
                    <Resume></Resume>
                    <div>
                        <a href="#contact"><button className="btn btn-outline btn-success">Hire Me <BiPhoneCall className='mx-auto'></BiPhoneCall></button></a>                    
                    </div>
                </div>
            </div>

            <div className='md:-ms-10 mt-5 photo_container md:flex justify-center md:gap-80 '>
                <div className='header_social'>
                    <HeaderSocial></HeaderSocial>
                </div>
                <div className='md:ps-10'>
                    <img src={myphoto} alt="me" className=' myPhoto ' />
                </div>
                <div >
                    <a href="#contact" className='scroll_down  text-sky-400'> scroll down{'---->'} </a>
                </div>
            </div>
            <div>
                <HeaderSocial2></HeaderSocial2>
            </div>
        </div>
    );
};

export default Banner;
