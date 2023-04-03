import React from "react";
import './Slideshow.css';

function Slideshow() {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName('img');
        let dots = document.getElementsByClassName('dot');
        let slideLength = 3;

        if(n > slideLength) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slideLength;
        }

        // for (let i = 0; i < slideLength; i++){
        //     slides[i].style.display = 'none';
        //     dots[i].className = dots[i].className.replace("active", "");
        // }
        
        // slides[slideIndex-1].style.display = 'block';
        // dots[slideIndex-1].className += ' active';
    }
    return (
        <div className="img-container">
            <div className="img">
                <img className="fade" src="/cover1.jpg" />
            </div>
            <div className="img">
                <img className="fade" src="/cover2.jpg" />
            </div>
            <div className="img">
                <img className="fade" src="/cover3.jpg" />
            </div>
            <a className="prev" onClick={plusSlides(-1)}>&#10094</a>
            <a className="next" onClick={plusSlides(1)}>&#10095</a>
            <div className="dot-container">
                <span className="dot dot1" onClick={currentSlide(1)}></span>
                <span className="dot dot2" onClick={currentSlide(2)}></span>
                <span className="dot dot3" onClick={currentSlide(3)}></span>
            </div>
        </div>
    );
}

export default Slideshow;