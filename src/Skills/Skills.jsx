import React from 'react';
import css from '../Assets/SkillsPhotos/css.png'
import html from '../Assets/SkillsPhotos/html5.png'
import firebase from '../Assets/SkillsPhotos/firebase.png'
import node from '../Assets/SkillsPhotos/nodejs.png'
import npm from '../Assets/SkillsPhotos/npm.png'
import express from '../Assets/SkillsPhotos/expressjs.png'
import bootstrap from '../Assets/SkillsPhotos/bootstrap.png'
import github from '../Assets/SkillsPhotos/github.png'
import tailwind from '../Assets/SkillsPhotos/tailwind.png'
import js from '../Assets/SkillsPhotos/js.png'
import mongodb from '../Assets/SkillsPhotos/mongodb.webp'
import netlify from '../Assets/SkillsPhotos/netlify.png'
import react from '../Assets/SkillsPhotos/react.png'





const Skills = () => {
    return (
        <div id='skill'>
            <div data-aos="fade-up"  className='md:mx-40 mx-4 my-40 pt-10'>     
            <div>
                <h2 className='flex justify-center font-extrabold my-10 text-5xl'>MY Skills</h2>
                <h2  className='flex justify-center text-5xl mb-10 font-extrabold rotate-180 -mt-10 text-gray-600 opacity-30'>sllikS YM</h2>

                <div className='grid md:grid-cols-6 grid-cols-2 gap-9 '>

                    <div data-aos="fade-right" className="card w-40 h-40 bg-sky-400 shadow-xl ">
                        <div className="card-body ">
                            <img className='h-28  hover:h-32 hover:-mt-6' src={css} alt="" />
                        </div>

                    </div>
                    <div data-aos="fade-left" className="card w-40 h-40 bg-sky-400 shadow-xl">
                        <div className="card-body">
                            <img className='h-28 hover:h-32 hover:-mt-6' src={html} alt="" />
                        </div>

                    </div>
                    <div data-aos="fade-right" className="card w-40 h-40 bg-sky-400 shadow-xl">
                        <div className="card-body">
                            <img className='h-28 hover:h-32 hover:-mt-6' src={firebase} alt="" />
                        </div>

                    </div>
                    <div data-aos="fade-left" className="card w-40 h-40 bg-sky-400 shadow-xl">
                        <div className="card-body">
                            <img className='h-28 hover:h-32 hover:-mt-6' src={node} alt="" />
                        </div>

                    </div>
                    <div data-aos="fade-right" className="card w-40 h-40 bg-sky-400 shadow-xl">
                        <div className="card-body">
                            <img className='h-28 hover:h-32 hover:-mt-6' src={npm} alt="" />
                        </div>

                    </div>
                    <div data-aos="fade-left" className="card w-40 h-40 bg-sky-400 shadow-xl">
                        <div className="card-body">
                            <img className='h-28 hover:h-32 hover:-mt-6' src={express} alt="" />
                        </div>

                    </div>
                    <div data-aos="fade-right" className="card w-40 h-40 bg-sky-400 shadow-xl">
                        <div className="card-body">
                            <img className='h-28 hover:h-32 hover:-mt-6' src={bootstrap} alt="" />
                        </div>

                    </div>
                    <div data-aos="fade-left" className="card w-40 h-40 bg-sky-400 shadow-xl">
                        <div className="card-body">
                            <img className='h-28 hover:h-32 hover:-mt-6' src={github} alt="" />
                        </div>

                    </div>
                    <div data-aos="fade-right" className="card w-40 h-40 bg-sky-400 shadow-xl">
                        <div className="card-body">
                            <img className='h-28 hover:h-32 hover:-mt-6' src={tailwind} alt="" />
                        </div>

                    </div>
                    <div data-aos="fade-left" className="card w-40 h-40 bg-sky-400 shadow-xl">
                        <div className="card-body">
                            <img className='h-28 hover:h-32 hover:-mt-6' src={js} alt="" />
                        </div>

                    </div>
                    <div data-aos="fade-right" className="card w-40 h-40 bg-sky-400 shadow-xl">
                        <div className="card-body">
                            <img className='h-28 hover:h-32 hover:-mt-6' src={mongodb} alt="" />
                        </div>

                    </div>
                    <div data-aos="fade-left" className="card w-40 h-40 bg-sky-400 shadow-xl">
                        <div className="card-body">
                            <img className='h-28 hover:h-32 hover:-mt-6' src={netlify} alt="" />
                        </div>

                    </div>
                    <div data-aos="fade-right" className="card w-40 h-40 bg-sky-400 shadow-xl ">
                        <div className="card-body">
                            <img className='h-28 hover:h-32 hover:-mt-6' src={react} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Skills;