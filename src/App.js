import React, { useEffect, useState } from 'react';
import Filter from './components/Filter'
import Nav from './components/Nav'
import Cards from './components/Cards'
import { filterData,apiUrl } from './data';
import {toast} from "react-toastify"
import Spinner from './components/Spinner'
  function App(){
    // we need to hit the url to get the data
    const [courses,setCourses] = useState('');
    const [loading,setLoading] = useState(true);
    const [category,setCategory] = useState(filterData[0].title);
    // only apicall should be made once so dependecy list is empty
    useEffect( ()=>{
      const fetchData = async()=>{
        // until the data comes show the spinner
        setLoading(true)
        try {
          const res = await fetch(apiUrl);
          const result = await res.json();
          setCourses(result.data);
        } catch (e) {
          toast.error("something went wrong")
        }
        // here the data would have came
        setLoading(false)
      }
      fetchData();
    },[])

    return (
      <div className='app'>
        <Nav></Nav>
        <Filter filterData={filterData}
         category={category}
         setCategory={setCategory}
        ></Filter>
        <div>{
          // if loading is true means the data still not came then it shows spinner else shows the cards
            loading ?(<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
            }
        </div>
      </div>
    );
}
export default App;