import React from 'react';
import p3 from '../../Assets/ProjectsPhoto/p3.png'
const P3 = () => {
    return (
        <div data-aos="fade-left" className='flex justify-center mt-4'>
            <div className="card w-80 bg-sky-400 shadow-xl ">
                <figure class="h-60 rounded-md">
                    <img src={p3} alt="Shoes" class="w-full transition-transform duration-[4000ms] hover:-translate-y-[35%]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Wonder zone</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <a href="https://github.com/anik12136/wonder-Zone-assignment-11-client"><button className="btn btn-primary">github Client</button></a>
                        <a href="https://github.com/anik12136/server-assignment-11"><button className="btn btn-primary">github Server</button></a>
                        <a href="https://admirable-fairy-b1f0d1.netlify.app/"><button className="btn btn-primary">Live Link</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default P3;