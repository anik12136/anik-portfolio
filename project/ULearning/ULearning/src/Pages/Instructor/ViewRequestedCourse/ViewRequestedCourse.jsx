import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import RequestedCourse from "./RequestedCourse";
import Loading from "../../../Components/Loading/Loading";

const ViewRequestedCourse = () => {
  const user = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ul-earning-server.vercel.app/courseRequest");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user]);
  console.log(courses);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-2/5 border my-16 rounded-md p-4 bg-slate-200 shadow-md">
          <h1 className="text-4xl my-8">View All Requested Courses</h1>
          {
            courses.length == 0 ?
            <>
            <Loading></Loading>
            </>
            :
            courses.map((data) =>
              <RequestedCourse item={data} key={data._id}></RequestedCourse>)
            
          }
          {/* {
            courses.map((data) =>
              <RequestedCourse item={data} key={data._id}></RequestedCourse>)
          } */}
        </div>
      </div>
    </>
  );
};

export default ViewRequestedCourse;
