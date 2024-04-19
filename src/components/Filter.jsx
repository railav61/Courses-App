function Filter(props){
    let filterdata = props.filterdata;
    let category = props.category;
    let setcategory=props.setcategory;
    function mousehandler(title){
        setcategory(title);
    }
    return(
        <div className='flex flex-row justify-center gap-8'>
            {
                filterdata.map((data)=>{
                    return <button 
                    className={`p-1 px-2 mt-5 border-2 rounded-md text-white bg-indigo-900 hover:border-indigo-900 hover:bg-indigo-200 hover:text-black ${category === data.id ? "bg-opacity-60 border-white":"border-opacity-40 border-transparent"}`}
                     key = {data.id} 
                     // onClick={()=>clickhandler(data.tiltle)}
                     onMouseOver={()=>mousehandler(data.title)}
                     >
                        {data.title}
                    </button>
                })
            }
        </div>
    )
}
export default Filter;