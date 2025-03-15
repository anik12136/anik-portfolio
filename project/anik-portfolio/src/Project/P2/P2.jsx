import p1 from '../../Assets/ProjectsPhoto/p1.png'
const P2 = () => {
    return (
        <div data-aos="fade-up" className='flex justify-center mt-4 h-[500px]'>
            <div className="card w-80 bg-sky-400 shadow-xl ">
                <figure className=" overflow-hidden rounded-md">
                    <img src={p1} alt="" className="w-full transition-transform duration-[4000ms] hover:-translate-y-[30%]" />
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-black font-bold">Food Fantasy</h2>
                    <p className='text-[10px] text-black'> {'>>'} On this website users will see varieties types of Thai food. <br />
                        {'>>'} User will see top-level Thai chefs. <br />
                        {'>>'}   Users can order food from this website.</p>
                    <div className=" flex gap-2 ">
                        <a href="https://github.com/anik12136/Food-Fantasy-Client">
                            <button className="btn btn-default btn-outline bg-sky-400 text-black hover:bg-white hover:text-sky-600  ">github Client</button></a>
                        <a href="https://github.com/anik12136/Food-Fantasy-server">
                            <button className="btn btn-default btn-outline bg-sky-400 text-black hover:bg-white hover:text-sky-600  ">github Server</button></a>
                        <a href="https://assignment-12-client-aa932.web.app/">
                            <button className="btn btn-default btn-outline bg-sky-400 text-black hover:bg-white hover:text-sky-600  ">Live Link</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default P2;