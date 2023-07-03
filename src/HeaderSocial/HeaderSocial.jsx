import React from 'react';
import { FaFacebookSquare, FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import "./HeaderSocial.css"
const HeaderSocial = () => {
    return (
        <div>
            <div className='header_social text-sky-400'>
                <a href="https://github.com/anik12136" target="_blank" className='text-3xl'><FaGithub></FaGithub></a>
                <a href="https://linkedin.com" target="_blank" className='text-3xl'><FaLinkedin></FaLinkedin></a>
                <a href="https://www.facebook.com/anickbiswas.antor/" target="_blank" className='text-3xl'><FaFacebookSquare></FaFacebookSquare></a>
            </div>   
        </div>
    );
};

export default HeaderSocial;