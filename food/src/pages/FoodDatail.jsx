import axios from '../axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import FoodPreview from '../components/food-datail/FoodPreview';
import FoodIngridients from '../components/food-datail/FoodIngridients';
import FoodDiscription from '../components/food-datail/FoodDiscription';
import FoodVideo from '../components/food-datail/FoodVideo';

const imgUrl = 'https://www.themealdb.com/images/ingredients/'
const FoodDatail = () => {
    const [meal, setMeal] = useState(null)
    const [ingredients, setIngredient] = useState(null)
    const [mera, setMera] = useState(null)


    const navigation = useNavigate()
    const back = () => {
        navigation(-1)
    }


    const params = useParams()
    const getFood = async () => {
        const { data } = await axios.get('api/json/v1/1/lookup.php?i=' + params.foodId)
        const meals = data.meals[0]
        setMeal(data.meals[0])

        const hesIngredients = []
        const hesMera = []

        for (let i = 1; i < 21; i++) {
            if (meals[`strIngredient${i}`]?.length > 0) {
                hesIngredients.push(meals[`strIngredient${i}`])
                hesMera.push(meals[`strMeasure${i}`])
            }
        }
        setIngredient([...hesIngredients])
        setMera([...hesMera])
    }
    useEffect(() => {
        getFood()
    }, [])
    if (meal == null) {
        return <h2>Loading...</h2>
    }

 

    return (
        <div style={{ background: ' #2d2013' }}>
            <div className='d-flex gap-3'>
                <FoodPreview
                    foodText={meal.strMeal}
                    foodImg={meal.strMealThumb}
                />
                <div>
                    <div className='d=flex justifly-content-between'>
                        <h3 style={{ color: 'white' }}>Ingredients</h3>
                        <button onClick={back}>Go back</button>
                    </div>
                    <div className='d-flex flex-wrap text-center'>
                        {ingredients?.map(el => (
                            <FoodIngridients
                                IngredientsImg={imgUrl + el + '.png'}
                                ingredientsName={el}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <FoodDiscription
                Discription={meal.strInstructions}
            />
            <FoodVideo
                video={meal.strYoutube}
            />
        </div>
    )
}

export default FoodDatail