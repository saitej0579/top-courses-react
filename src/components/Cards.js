import React from "react";
import Card from './Card'
const Cards = (props)=>{
    let courses = props.courses;
    let allCourse = [];
    let category = props.category;
    function getCourses (){
       if(category === 'All'){
            // we only need values of categoryes so used values, and here we showing all the coures if the passed category is All
            Object.values(courses).forEach( (courseCategory) => {
            courseCategory.forEach( (course)=>{
                allCourse.push(course);
                })  
            })
        return allCourse;
       }
       else{
        // if particular category is passed then we returning that category only
        return courses[category];
       }
    }

    return(
        <div className="cards">
            {getCourses().map((course)=>{
                return <Card key={course.id} course={course}></Card>
            })}
        </div>
    );
}
export default Cards;