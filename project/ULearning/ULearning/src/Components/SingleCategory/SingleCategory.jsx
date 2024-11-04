import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import PopularCourseComponent from "../../Pages/Home/PopularCourses/PopularCourseComponent/PopularCourseComponent";



const SingleCategory = ({ image, name, courses }) => {

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    console.log(image, name, courses);

    return (         
            <div>
                <button onClick={onOpenModal}>

                    <img className="h-56 w-56 my-3 rounded-full hover:rounded-3xl" src={image} alt={name} />
                    <h2 className="text-center">{name}</h2>
                </button>
                <Modal open={open} onClose={onCloseModal} center>
                    <div className="w-full ">
                        <h2 className="text-center">{name}</h2>
                        <div className="mt-20 grid grid-cols-2 gap-x-3 gap-y-6">

                            {/* mapping---------- */}
                            {courses?.map(item => (
                                <PopularCourseComponent key={item._id} course={item}>
                                </PopularCourseComponent>
                            ))}

                        </div>
                    </div>
                </Modal>
            </div>

    );
};

export default SingleCategory;