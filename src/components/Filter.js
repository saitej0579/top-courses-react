import React from "react";

const Filter = (props)=>{
    const filterData = props.filterData;
    const setCategory = props.setCategory;
    const categoryHandler = (data)=>{
        setCategory(data);
    }

    return(
        <div className="filter">
            {filterData.map( (data)=>{
            return <button key={data.id}
                    onClick={() =>categoryHandler(data.title)}
                    >{data.title}</button>;
            })}
        </div>
    );
}

export default Filter;