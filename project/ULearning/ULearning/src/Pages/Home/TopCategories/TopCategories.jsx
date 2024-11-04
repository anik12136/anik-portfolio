import Business from "../../../../public/images/homepage images/Business.png";
import Photography from "../../../../public/images/homepage images/Photography.png";
import Music from "../../../../public/images/homepage images/Music.png";
import Design from "../../../../public/images/homepage images/Design.png";
import Development from "../../../../public/images/homepage images/development.png";
import Marketing from "../../../../public/images/homepage images/Marketing.png";
import ITAndSoftware from "../../../../public/images/homepage images/IT and Software.png";
import PersonalDevelopment from "../../../../public/images/homepage images/PersonalDevelopment.png";
import SingleCategory from "../../../Components/SingleCategory/SingleCategory";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
const TopCategories = () => {

    const user = useContext(AuthContext);
    // data fetch..............
    const [allCourses, setAllCourses] = useState(null);    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://ul-earning-server.vercel.app/formCourses'); // Specify the path to your JSON file in the public folder
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setAllCourses(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [user]);
    console.log(allCourses);

    const allDesign = allCourses?.filter(course => course.courseCategories === "Design");
    
    const allDevelopment = allCourses?.filter(course => course.courseCategories === "Development");

    const allMarketing = allCourses?.filter(course => course.courseCategories === "Marketing");

    const allIT = allCourses?.filter(course => course.courseCategories === "It and Software");

    const allPersonalDevelopment = allCourses?.filter(course => course.courseCategories === "Personal development");

    const allBusiness = allCourses?.filter(course => course.courseCategories === "Business");
    
    const allPhotography = allCourses?.filter(course => course.courseCategories === "Photography");

    const allMusic = allCourses?.filter(course => course.courseCategories === "Music");

    
console.log(allPersonalDevelopment)
    return (
        <div className=" my-14 mx-40 mb-40">
            <h2 className="text-center text-3xl my-8 border-b-4 rounded-b-lg w-56  mx-auto ">TopCategories</h2>
            <div className="grid  grid-cols-4 gap-y-6 gap-x-20">
                
                    <SingleCategory
                        image={Design}
                        name="Design"
                        courses={allDesign}
                        >   
                        
                    </SingleCategory>
                    
                
                <Link>
                    <SingleCategory
                        image={Development}
                        name="Development"
                        courses={allDevelopment}
                        >
                    </SingleCategory>
                </Link>
                <Link>
                    <SingleCategory
                        image={Marketing}
                        name="Marketing"
                        courses={allMarketing}
                        >
                    </SingleCategory>
                </Link>
                <Link>
                    <SingleCategory
                        image={ITAndSoftware}
                        name="IT and Software"
                        courses={allIT}
                        >
                    </SingleCategory>
                </Link>
                <Link>
                    <SingleCategory
                        image={PersonalDevelopment}
                        name="Personal development"
                        courses={allPersonalDevelopment}
                        >
                    </SingleCategory>
                </Link>
                <Link>
                    <SingleCategory
                        image={Business}
                        name="Business"
                        courses={allBusiness}
                        >
                    </SingleCategory>
                </Link>
                <Link>
                    <SingleCategory
                        image={Photography}
                        name="Photography"
                        courses={allPhotography}
                        >
                    </SingleCategory>
                </Link>
                <Link>
                    <SingleCategory
                        image={Music}
                        name="Music"
                        courses={allMusic}
                        >
                    </SingleCategory>
                </Link>
            </div>
        </div>
    );
};

export default TopCategories;