import p2 from '../../Assets/ProjectsPhoto/p2.png'
const P1 = () => {
    return (
        <div data-aos="fade-down" className='flex justify-center mt-4 h-[500px]'>
            <div className="card w-80 bg-sky-400 shadow-xl ">
                <figure className=" overflow-hidden rounded-md">
                    <img src={p2} alt="" className="w-full transition-transform duration-[3000ms] hover:-translate-y-[35%]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-black font-bold">You Drawing</h2>
                    <p className='text-[10px] text-black'> {'>>'} When registering on my website You can take different types of Drawing courses as a student. <br />
                    {'>>'} Users can also sell their Drawing courses if they are an instructor. <br />
                    {'>>'}   If the Admin creates a user as an admin, then the user can control this website as an admin.</p>
                    <div className="flex gap-2">
                        <div><a href="https://github.com/anik12136/You-Drawing-client"><button  className="btn btn-default btn-outline bg-sky-400 text-black hover:bg-white hover:text-sky-600  ">github Client</button></a></div>
                        <div> <a href="https://github.com/anik12136/You-drawing-server"><button  className="btn btn-default btn-outline bg-sky-400 text-black hover:bg-white hover:text-sky-600  ">github Server</button></a></div>
                        <div><a href="https://fir-assignment-10-d2367.web.app/"><button className="btn btn-default btn-outline bg-sky-400 text-black hover:bg-white hover:text-sky-600  ">Live Link</button></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default P1;