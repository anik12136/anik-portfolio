import React from 'react';
import { FaDownload } from 'react-icons/fa';
import resume from './resume.pdf'

const Resume = () => {
    return (
        <div className='flex gap-1'>
            <a href="https://drive.google.com/file/d/10XUKXd_z7z6K8FcZIAqRvnYPZVDJUrOL/view?usp=sharing"><button className="btn btn-outline btn-info ">Resume</button></a>
            <button className="btn btn-outline btn-info "><a href={resume} download> <FaDownload className='mx-auto'></FaDownload></a></button>
        </div>
    );
};

export default Resume;