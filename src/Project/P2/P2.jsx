import React from 'react';
import p1 from '../../Assets/ProjectsPhoto/p1.png'
const P2 = () => {
    return (
        <div className='flex justify-center mt-4'>
            <div className="card w-80 bg-sky-400 shadow-xl ">
                <figure class="h-60 overflow-hidden rounded-md">
                    <img src={p1} alt="Shoes" class="w-full transition-transform duration-[4000ms] hover:-translate-y-[35%]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Food Fantasy</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <a href="https://github.com/anik12136/Food-Fantasy-Client"><button className="btn btn-primary">github Client</button></a>
                        <a href="https://github.com/anik12136/Food-Fantasy-server"><button className="btn btn-primary">github Server</button></a>
                        <a href="https://assignment-12-client-aa932.web.app/"><button className="btn btn-primary">Live Link</button></a>
                    </div>
                </div>
            </div>        </div>
    );
};

export default P2;