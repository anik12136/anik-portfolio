import React from 'react';
import "./Navbar.css";
const Navbar = () => {
    return (
       <nav className='md:ms-[38%] px-5 py-4 font-bold   bg-slate-50 bg-opacity-20'>
            <a href="#">Home</a>
            <a href="#about">about</a>
            <a href="#skill">skills</a>
            <a href="#project">projects</a>
            <a href="#contact">contact</a>
       </nav>
    );
};

export default Navbar;