import p3 from '../../Assets/ProjectsPhoto/p3.png'
const P3 = () => {
    return (
        <div data-aos="fade-down" className='flex justify-center mt-4 h-[500px]'>
            <div className=" card w-80 bg-sky-400 shadow-xl">
                <figure className="rounded-md">
                    {/* <img src={p3} alt="" class="w-full transition-transform duration-[4000ms] hover:-translate-y-[35%]" /> */}
                    <img src={p3} alt="" className=" duration-[3000ms] hover:-translate-y-[38%]" />
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-black font-bold">Wonder zone</h2>
                    <p className='text-[10px] text-black'> {'>>'} On my website user will see many types of toy cars. <br />
                        {'>>'} As a seller user can upload your toy car. <br />
                        {'>>'}  As a buyer user can buy toy cars.
                    </p>
                    <div className="flex gap-2">
                        <a href="https://github.com/anik12136/wonder-Zone-assignment-11-client">
                            <button className="btn btn-default btn-outline bg-sky-400 text-black hover:bg-white hover:text-sky-600  ">github Client</button></a>
                        <a href="https://github.com/anik12136/server-assignment-11">
                            <button className="btn btn-default btn-outline bg-sky-400 text-black hover:bg-white hover:text-sky-600  ">github Server</button></a>
                        <a href="https://admirable-fairy-b1f0d1.netlify.app/">
                            <button className="btn btn-default btn-outline bg-sky-400 text-black hover:bg-white hover:text-sky-600  ">Live Link</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default P3;