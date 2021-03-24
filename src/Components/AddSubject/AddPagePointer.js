import React, {useEffect} from 'react';
import './AddPagePointer.css';

function AddPagePointer({changeSlide, changeDot}) {
    const handlePageClick = (idx) => {
        const slides = document.querySelectorAll('.slide');
        slides.forEach(slide => {
            slide.classList.remove('active');
        })
        const thisslide = document.querySelector(`.page-${idx} svg`);
        thisslide.classList.add('active');
        changeSlide(idx);
        changeDot(thisslide);
    }

    return (
        <div class="pages">
            <div class="page-0" onClick={idx => handlePageClick(0)}>
                <h3>Skill</h3>
                <svg
                    class="slide active"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    
                >
                    <circle cx="6" cy="6" r="6" fill="white" />
                    
                </svg>
            </div>
            <div class="page-1" onClick={idx => handlePageClick(1)}>
                <h3>Project</h3>
                <svg
                    class="slide "
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    
                >
                    <circle cx="6" cy="6" r="6" fill="white" />
                </svg>
            </div>
            <div class="page-2" onClick={idx => handlePageClick(2)}>
                <h3>Course</h3>
                <svg
                    class="slide"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    
                >
                    <circle cx="6" cy="6" r="6" fill="white" />
                </svg>
            </div>
        </div>
    )
}

export default AddPagePointer
