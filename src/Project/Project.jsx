import React from 'react';
import P1 from './P1/P1';
import P2 from './P2/P2';
import P3 from './P3/P3';
const Project = () => {
    return (
       <div data-aos="fade-up" id='project' className='my-20 pt-14'>
        <h2 className='flex justify-center text-5xl my-10'>My Projects</h2>
         <div  className=' md:mx-40  md:flex justify-between'> 
            <P1></P1>
            <P2></P2>
            <P3></P3>    
        </div>
       </div>

    );
};

export default Project;