import React, {useState} from "react";
import "./Slideshow.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Slideshow() {
     let [count, setCount]  = useState(0);

    const plusSlides = () => {
        if (count < images.length-1){
            setCount(count + 1);
        }
    }

    const negativeSlides = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }

    const images = [
        {url: "/cover1.jpg"},
        {url: "/cover2.jpg"},
        {url: "/cover3.jpg"}
    ];

    return (
        <div className="img-container">
            <div className="img">
                <img className="fade" src={images[count].url} />
            </div>
            <div className="prev" onClick={negativeSlides}>
                <IoIosArrowBack />
            </div>
            <div className="next" onClick={plusSlides}>
                <IoIosArrowForward />
            </div>
            <div className="dot-container">
                <span className="dot dot1"></span>
                <span className="dot dot2"></span>
                <span className="dot dot3"></span>
            </div>
        </div>
    );
}

export default Slideshow;