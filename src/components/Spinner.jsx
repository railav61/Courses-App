import { BeatLoader,BarLoader } from "react-spinners";
function Spinner(){
    return(
        <div className='h-screen w-screen flex flex-col justify-center items-center'>
            <BarLoader
  color="#00fff3"
  height={5}
  width={180}
/>
{/* <BeatLoader
  color="#7436d6"
  loading
  margin={3}
  size={20}
/> */}
            <p className='text-xl font-medium mt-2 text-white'>Loading...</p>
        </div>
    )
}

export default Spinner;