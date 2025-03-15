import P1 from './P1/P1';
import P2 from './P2/P2';
import P3 from './P3/P3';
const Project = () => {
    return (
       <div data-aos="fade-up" id='projects' className='my-20 pt-24'>
        <h2 className='flex justify-center text-5xl mt-4 font-extrabold'>MY Projects</h2>
        <h2  className='flex justify-center md:text-5xl text-3xl  font-extrabold rotate-180  text-gray-600 opacity-30'>stcejor<span className='rotate-180 me-3'>b </span> YM</h2>
         <div  className=' md:mx-40  md:flex justify-between'> 
            <P1></P1>
            <P2></P2>
            <P3></P3>    
        </div>
       </div>

    );
};

export default Project;