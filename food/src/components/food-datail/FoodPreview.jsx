import React from 'react'

const FoodPreview = (props) => {
    return (
        <div>
            <h3 style={{ color: 'white' }}>{props.foodText}</h3>
            <img width={300} src={props.foodImg} />
        </div>
    )
}

export default FoodPreview