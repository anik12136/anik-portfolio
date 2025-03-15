import Resume from '../Assets/Resume/Resume';
import './Banner.css';
import myPhoto from '../Assets/MyPhoto/anik.jpg';
import HeaderSocial from '../HeaderSocial/HeaderSocial';
import { BiPhoneCall } from 'react-icons/bi';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Banner = () => {
    const [text] = useTypewriter({
        words: ['MERN Stack Developer', 'Front-End Developer', 'Graphics Designer'],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 20,
        delaySpeed: 1500,
    });

    // Load particles.js config
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div id='home' className="relative w-full flex items-center justify-center">
            {/* Background Particles */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: "#0d1117",  // Dark background color
                    },
                    fpsLimit: 60,
                    particles: {
                        number: { value: 80, density: { enable: true, area: 800 } },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: { value: 0.5, random: false },
                        size: { value: 3, random: true },
                        move: { enable: true, speed: 2, direction: "none", outMode: "out" },
                    },
                    interactivity: {
                        events: { onHover: { enable: true, mode: "repulse" }, resize: true },
                        modes: { repulse: { distance: 100, duration: 0.4 } },
                    },
                    detectRetina: true,
                }}
                className="absolute w-full h-full"
            />


            <div className='relative flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20'>
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center md:text-left"
                >
                    <h1 className='text-5xl font-extrabold text-white'>
                        Hi, {`I'm`} <span className='text-sky-400'>Anik Biswas</span>
                    </h1>
                    <h3 className='mt-3 text-3xl font-extrabold text-white'>
                        <span className='text-sky-400'>a</span> {text} <Cursor cursorColor='red' />
                    </h3>

                    <div className='flex justify-center md:justify-start space-x-6 my-10'>
                        <Resume />
                        <motion.a whileHover={{ scale: 1.1 }} href="#contact">
                            <button className="btn btn-outline btn-success shadow-md shadow-sky-300">
                                Hire Me <BiPhoneCall className='mx-auto' />
                            </button>
                        </motion.a>
                    </div>

                    <div className='pt-28'>
                        <HeaderSocial />
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <img src={myPhoto} alt="me" className="myPhoto shadow-lg shadow-sky-300" />
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
