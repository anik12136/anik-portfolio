import React from 'react';
import p2 from '../../Assets/ProjectsPhoto/p2.png'
const P1 = () => {
    return (
        <div data-aos="fade-right" className='flex justify-center mt-4'>
            <div className="card w-80 bg-sky-400 shadow-xl ">
                <figure class="h-60 overflow-hidden rounded-md">
                    <img src={p2} alt="Shoes" class="w-full transition-transform duration-[4000ms] hover:-translate-y-[35%]"/>
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">You Drawing</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <a href="https://github.com/anik12136/You-Drawing-client"><button className="btn btn-primary">github Client</button></a>
                        <a href="https://github.com/anik12136/You-drawing-server"><button className="btn btn-primary">github Server</button></a>
                        <a href="https://fir-assignment-10-d2367.web.app/"><button className="btn btn-primary">Live Link</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default P1;