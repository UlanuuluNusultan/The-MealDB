import React from 'react'

const FoodDiscription = (props) => {
    return (
        <div className='text-center'>
            <h3 style={{ color: 'white' }}>Instruction</h3>
            <p style={{ color: 'white' }}>  {props.Discription}</p>
        </div>
    )
}

export default FoodDiscription