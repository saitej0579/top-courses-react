import React, { useState } from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";
function Card ({course}){
    const [liked,setLiked] = useState(false);
    const likeHandler =  ()=>{
        if(liked){
            toast.warning('dis liked');
            setLiked(false)
        }
        else{
            toast.success('liked');
            setLiked(true)
        }
    }
    return(
        <div className="cardContainer">
            <div className="image-container">
                <img src={course.image.url} alt={course.image.alt}></img>
                <button onClick={likeHandler}>
                    {liked?<FcLike fontSize="2em"></FcLike>:<FcLikePlaceholder fontSize="2rem"></FcLikePlaceholder>}
                </button>
            </div>
            <div className="card-title">
                <p>{course.title}</p>
            </div>
            <div className="card-description">
                <p>{course.description.substring(0,200)}</p>
                {/* <p>{course.description}</p> */}
            </div>
        </div>
    );
}
export default Card;