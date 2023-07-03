import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import "./HeaderSocial2.css"
const HeaderSocial2 = () => {
    return (
        <div>
            <div className='header_social2'>
                <a href="https://github.com/anik12136" target="_blank" className='text-3xl'><FaGithub></FaGithub></a>
                <a href="https://linkedin.com" target="_blank" className='text-3xl'><FaLinkedin></FaLinkedin></a>
                <a href="https://www.facebook.com/anickbiswas.antor/" target="_blank" className='text-3xl'><FaFacebookSquare></FaFacebookSquare></a>

            </div>
        </div>
    );
};

export default HeaderSocial2;