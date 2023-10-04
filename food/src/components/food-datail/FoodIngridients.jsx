import React from 'react'

const FoodIngridients = (props) => {
    return (
        <div>
            <img width={100} src={props.IngredientsImg} />
            <h5 style={{ color: ' #d57d1f' }}>{props.ingredientsName}</h5>
        </div>
    )
}

export default FoodIngridients