// import PropTypes from 'prop-types';
// import { ShoppingCartIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import Bookmark from "../../../../Components/Bookmark/Bookmark";
import AddTOCart from "../../../../Components/AddTOCart/AddTOCart";
import { FaRegUser } from "react-icons/fa";



const PopularCourseComponent = ({ course }) => {


  return (
    <div className="grid  justify-center items-center">
      <div className=" text-left border rounded-sm shadow-lg w-80 h-[580px] ">
        <div>
          {/* -----------------------Banner Image -------------------------*/}
          <img
            className="h-44 w-full object-fill rounded-sm border border-black-2 "
            src={course.courseBanner}
            alt="course banner"
          />
          <div className="px-3">
            {/*----------------------- Course title ------------------------*/}
            <p className="text-left font-semibold mt-3 text-lg h-16">
              {course.courseTitle}
            </p>
            {/*------------------- Course Teacher Name -------------------*/}
            <div className="flex items-center gap-2 my-2 text-sm">
              <FaRegUser></FaRegUser>
              <p className="text-gray-500">{course.teacherName}</p>
            </div>

            {/* content & features  */}

            <div className="flex">
              {/* ------------------Course Content details -------------------*/}
              <div className="text-gray-500 grid grid-cols-1 gap-2 text-center my-3 text-sm me-6">
                <p className="p-1 border border-gray-500 rounded-full">
                  {course.courseHours} h+
                </p>
                <p className="p-1 border border-gray-500 rounded-full">
                  {course.modules} milestones
                </p>
                <p className="p-1 border border-gray-500 rounded-full">
                  {course.numberOfVideos} videos
                </p>
                <p className="p-1 border border-gray-500 rounded-full">
                  {course.numberOfQuizzes} Quizzes
                </p>
                <p className="p-1 border border-gray-500 rounded-full">
                  {course.courseHours} Videos
                </p>
              </div>

              {/*------------------------------ Features------------------------ */}
              <div className="text-blue-800 text-sm mt-3 border-l-2 ps-2">
                <p className="text-lg text-black">Features:</p>
                {course?.features?.map((feature, index) => (
                  <p
                    className=" p-1 rounded-lg "
                    key={index}
                  >
                    {feature}
                  </p>
                ))}
              </div>

            </div>



          </div>

          {/* -------------Course Price & Bookmark----------------- */}
          <div className="flex justify-between items-center px-4 mt-4 ">

            <div className="">
              <p className="font-bold text-lg">$ {course.coursePrice}</p>
            </div>

            {/* Add to cart button */}
            <div className="items-center flex gap-2 px-2 py-1 rounded-full hover:bg-yellow-400">

              <AddTOCart coursePrice={course.coursePrice}
                course={course}
              ></AddTOCart><span>add to cart</span>
            </div>

            {/* <BookmarkIcon className="h-7"></BookmarkIcon> */}
            <div className="px-2 py-1 rounded-full hover:bg-yellow-400">
              <Bookmark
                key={course._id}
                course={course}
              ></Bookmark>
            </div>

          </div>



        </div>
      </div>
    </div>

  );

};
export default PopularCourseComponent;
