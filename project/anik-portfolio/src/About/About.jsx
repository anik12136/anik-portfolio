import myImage from "../Assets/MyPhoto/anik.jpg"
import "./About.css"
const About = () => {
    return (

        < div data-aos="" className='md:mx-40 mx-2 md:lg:pt-32 pb-40'>
            <div  id="about">
                <div  data-aos="fade-in" className='text-center my-6'>
                    <h2 className='text-5xl mb-10 font-extrabold pt-20'>About Me</h2>
                    <h2 className='transform scale-y-[-1] text-5xl mb-10 font-extrabold -mt-10 text-gray-600 opacity-30'>About Me</h2>
                </div>

                <div className='about_container md:flex justify-between'>
                    <div data-aos="flip-left" className="about_me">
                        <div className="about_me_image bg-sky-400 rounded-[20px]">
                            <img className='h-96 w-96 md:rotate-[15deg] rounded-[20px] hover:rotate-[0deg]' src={myImage} alt="" />
                        </div>
                    </div>
                    <div className="about_content mt-4">
                        <div className="about_cards md:w-[500px]">
                            <div className='flex gap-5 justify-start'>
                                <div data-aos="fade-right" className="card w-40 h-40 bg-sky-400 shadow-xl">
                                    <div className="card-body text-center text-xl">
                                        <h2>1+</h2>
                                        <h2>years</h2>
                                        <h2>experience</h2>
                                    </div>
                                </div>
                                <div data-aos="fade-left" className="card w-40 h-40 bg-sky-400 shadow-xl">
                                    <div className="card-body text-center text-xl">
                                        <h2>6</h2>
                                        <h2>Complete</h2>
                                        <h2>Project</h2>
                                    </div>
                                </div>

                            </div>
                            <div data-aos="fade-up">
                                <p className='mt-5'>Hello ! {`I'm`} a Front-End web developer,
                                    and {`I'm`} very passionate and dedicated to my work.
                                    With 1+ years experience as a professional web developer.
                                    {`I'm`} also a part time graphics designer.
                                    Currently I am studying CSE in United International university.
                                    I love to acquirer skills and knowledge.
                                    I am hardworking person and also i am a first learner.
                                    I never give up in any station in my life.
                                    I also love to painting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;