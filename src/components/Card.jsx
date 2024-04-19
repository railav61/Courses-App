import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props){
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourse = props.setLikedCourse;
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourse((prev)=>prev.filter((cid)=>cid !== course.id));
            toast.warning("Like Removed");
        }
        else{
            if(likedCourses.length === 0){
                setLikedCourse([course.id]);
            }
            else(
                setLikedCourse((prev)=>[...prev, course.id])
            )
            toast.success("Liked Successfully");
        }

    }
    return(
        <div className='flex flex-wrap w-[300px] border-2 border-black p-1 bg-slate-800 text-white rounded-sm overflow-hidden'>
                <div className='relative w-[288.8px] h-[162.45px]'>
                    <img src={course.image.url}/>
                    <div className='w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full absolute bottom-[-20px] right-2'>
                    <button onClick={clickHandler}>
                        {
                        likedCourses.includes(course.id) ? (<FcLike fontSize='1.5rem'/>):(<FcLikePlaceholder fontSize='1.5rem'/>)
                        }
                    </button>
                    </div>
                </div>
            <div className='p-4'>
                <div className='font-medium text-xl'>{course.title}</div>
                <div>
                    {
                        course.description.length >100 ?
                        (`${course.description.substr(0,100)}.....`):
                        (course.description)
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;