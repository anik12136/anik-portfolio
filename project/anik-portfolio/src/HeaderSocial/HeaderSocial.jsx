import { FaFacebook, FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';

// import "./HeaderSocial.css"
const HeaderSocial = () => {
    return (
        <div>
            <div className='header_social text-sky-400 flex gap-4'>
                <div >
                    <a href="https://github.com/anik12136" target="_blank" className='text-3xl'><FaGithub className='rounded-full shadow-md shadow-sky-300 hover:text-white'></FaGithub></a>
                </div>
                <div >
                    <a href="https://www.linkedin.com/in/anik-biswas-aa1586282/" target="_blank" className='text-3xl '><GrLinkedin className=' shadow-md shadow-sky-300 rounded-full hover:text-white'></GrLinkedin></a>
                </div>
                <div>
                    <a href="https://www.facebook.com/anickbiswas.antor/" target="_blank" className='text-3xl'><FaFacebook  className=' shadow-md shadow-sky-300 rounded-full hover:text-white'></FaFacebook ></a>
                </div>
            </div>
        </div>
    );
};

export default HeaderSocial;