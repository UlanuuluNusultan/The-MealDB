import axios from '../axios';
import React, { useEffect, useState } from 'react'
import { useParams, } from 'react-router-dom'

const FoodDatail = () => {
    const [meal, setMeal] = useState(null)
    const params = useParams()
    console.log(params.foodId);
    const getFood = async () => {
        const { data } = await axios.get('api/json/v1/1/lookup.php?i=' + params.foodId)
        console.log(data.meals);
        setMeal(data.meals)
    }
    useEffect(() => {
        getFood()
    }, [])
    return (
        <div className='food'>
            {meal?.map(el => {
                return (
                    <div className=''>
                        <h2 className='name' >{el.strMeal}</h2>
                        <div className='foods'>

                            <img src={el.strMealThumb} width={320} />
                            <div className=''>
                                <h3>{el.strMeasure1} mushrooms</h3>
                                <h3>{el.strMeasure2} English Mustarg</h3>
                                <h3>{el.strMeasure3} Olive Oil</h3>
                                <h3>{el.strMeasure4} Beef Fillet</h3>
                                <h3>{el.strMeasure5} Parma ham</h3>
                                <h3>{el.strMeasure6} Puff Pastry</h3>
                                <h3>{el.strMeasure7} Flour</h3>
                                <h3>{el.strMeasure8} Egg Yolks</h3>
                                <h3>{el.strMeasure9} </h3>
                                <h3>{el.strMeasure10} </h3>
                                <h3>{el.strMeasure11} </h3>
                                <h3>{el.strMeasure12} </h3>
                                <h3>{el.strMeasure13} </h3>
                                <h3>{el.strMeasure14} </h3>
                                <h3>{el.strMeasure15} </h3>
                                <h3>{el.strMeasure16} </h3>
                                <h3>{el.strMeasure17} </h3>
                                <h3>{el.strMeasure18} </h3>
                                <h3>{el.strMeasure19} </h3>
                                <h3>{el.strMeasure20} </h3>
                            </div>
                        </div>
                        <div>
                            <h2 className='Instructions'>Instructions</h2>
                            <p>{el.strInstructions}</p>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default FoodDatail