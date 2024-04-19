import NavBar from './components/NavBar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from "./components/Spinner.jsx";
import {filterdata,apiUrl} from './data.js'
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


function App() {
  const[loading,setLoading] = useState(true);
  const [courses,setdata] = useState('');
  const [category,setcategory] = useState(filterdata[0].title)

const fetchdata= async()=>{
  setLoading(true);
  try{
    const res = await fetch(apiUrl);
    const output = await res.json();
    setdata(output.data);
  }
  catch(error){
    toast.error("Something Went Wrong");
  }
  setLoading(false);
}

  useEffect(()=>{
    fetchdata();
  },[]);
  // const business = courses.Business;
  // const design = courses.Design;
  // const development = courses.Development;
  // const lifestyle = courses.Lifestyle;
  
  return (
    <div className='flex flex-col min-h-screen bg-slate-700 flex-wrap'>
      <div><NavBar/></div>
      <div className='bg-slate-700'>
      <Filter 
          filterdata = {filterdata} 
          category = {category}
          setcategory = {setcategory}
          />
      {
        loading ? (<Spinner/>):(<Cards 
          courses = {courses}
          category = {category}
        />)
      }
      </div>
    </div>
  );
}

export default App;
