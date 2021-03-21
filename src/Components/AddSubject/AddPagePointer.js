import React from 'react';
import './AddPagePointer.css';

function AddPagePointer() {
    return (
        <div class="pages">
            <div class="page-1">
                <h3>01</h3>
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
            <div class="page-2">
                <h3>02</h3>
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
            <div class="page-3">
                <h3>03</h3>
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
