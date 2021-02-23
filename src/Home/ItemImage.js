import React from 'react'

function ItemImage({skill_set, img_url}) {
    // const imageSrc = require(""+img_url)
    return (
        <div>
            <img src={require(`${img_url}`)} alt={skill_set} style={{width:'50px', height:'50px'}}/>
        </div>
    )
}

export default ItemImage
