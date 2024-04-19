import { useState } from 'react';
import Card from './Card'
function Cards(props){
    let courses = props.courses;
    let category = props.category;
    const [likedCourses,setLikedCourse] = useState([]);

    function getCourse(){
        if(category === "All"){
            let courseArr = [];
            Object.values(courses).forEach(coursecatagory=>{
                coursecatagory.forEach(course=>{
                    courseArr.push(course);
                })
            })
            return courseArr;
        }
        else{
            return courses[category];
        }
    }
    return(
        <div className='w-full h-full flex flex-wrap gap-5 justify-center mt-10'>
            {
                getCourse().map((course) =>{
                    return <Card 
                    key = {course.id}
                    course = {course}
                    likedCourses = {likedCourses}
                    setLikedCourse = {setLikedCourse}
                    />
                })
            }
        </div>
    )
}
export default Cards;