import React, { useState, useEffect } from 'react'

function RatingComp({rating, ratingColor}) {
    const [starColor, setStarColor] = useState('yellowgreen');
    
    useEffect(()=>{
        if(ratingColor){
            setStarColor(ratingColor);
        }
    },[])

    const num = parseInt(rating,10);
    let isDecimal = false;
    if(rating - num == 0.5)
        isDecimal = true;
    const remainingStars = parseInt(5 - rating, 10);

    return (
        <div className="ratingComp" style={{color:starColor, display:'flex'}}> {/* display flex in not necessary */}
            {
                Array(num).fill().map((_, i)=>(
                    <i className="fas fa-star"></i>
                ))
            }
            {
                isDecimal && <i className="fas fa-star-half-alt"></i>
            }
            {
                Array(remainingStars).fill().map((_, i)=>(
                    <i className="far fa-star"></i>
                ))
            }
        </div>
    )
}

export default RatingComp
