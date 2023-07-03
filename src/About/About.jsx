import React from 'react';
import myImage from "../Assets/MyPhoto/anik.JPG"
const About = () => {
    return (
        <div id='about' className='md:mx-40 mx-2 mt-20'>
            <div className='text-center my-6'>
                <h2 className='text-5xl mb-10'>About Me</h2>
            </div>

            <div className='about_container md:flex justify-between'>
                <div className="about_me">
                    <div className="about_me_image bg-sky-400 rounded-[20px]">
                        <img className='h-96 w-96 rotate-[15deg] rounded-[20px] hover:rotate-[0deg]' src={myImage} alt="" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards md:w-[500px]">
                        <div className='flex gap-5 justify-start'>
                            <div className="card w-40 h-40 bg-sky-400 shadow-xl">
                                <div className="card-body">

                                </div>
                            </div>
                            <div className="card w-40 h-40 bg-sky-400 shadow-xl">
                                <div className="card-body">

                                </div>
                            </div>
                            <div className="card w-40 h-40 bg-sky-400 shadow-xl">
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo quam recusandae soluta eum suscipit ipsam similique.
                            Provident beatae vel, obcaecati quod aut voluptatibus similique
                            ut quidem repudiandae natus recusandae itaque quibusdam dolorem,
                            fugiat voluptas, atque rem? Ratione neque natus dolor nesciunt excepturi
                            quo nihil labore ad vitae nostrum quia qui, ea magnam modi.
                            Voluptatum aut odio, eos consequuntur ipsum at in,
                            temporibus itaque qui perspiciatis aliquam laudantium nobis!
                            Sapiente numquam in, blanditiis eaque velit eum non voluptatum
                            corrupti id veniam inventore totam dicta consequatur ex labore
                            quae accusamus aliquid nihil mollitia praesentium amet laborum?
                            Corporis adipisci voluptate deleniti consequuntur sequi!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;