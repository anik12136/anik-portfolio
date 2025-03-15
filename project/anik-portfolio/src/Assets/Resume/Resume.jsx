import { FaDownload } from 'react-icons/fa';
import resume from './resume.pdf'

const Resume = () => {
    return (
        <div className='flex gap-1'>
            <a href="https://drive.google.com/file/d/1ZEctOQNSSTrfrw5CdJgMZFBkF4fw2aF1/view?usp=sharing"><button className="btn btn-outline btn-info shadow-md shadow-sky-300">Resume</button></a>
            <button className="btn btn-outline btn-info shadow-md shadow-sky-300"><a href={resume} download> <FaDownload className='mx-auto'></FaDownload></a></button>
        </div>
    );
};

export default Resume;