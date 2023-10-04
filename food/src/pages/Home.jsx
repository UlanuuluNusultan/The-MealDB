
import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const [meal, setMeal]= useState(null)
    // const [value, setValue] = useState('');
    // const filteredFood = meal.filter(meal => {
    //     return meal.strMeal.toLowerCase().includes(value.toLowerCase())
    // })


    const getMeal=async()=>{
        const {data}=await axios.get('/api/json/v1/1/search.php?f=b')
        console.log(data.meals);
        setMeal(data.meals)
    }
    
    useEffect(()=>{
        getMeal()
    },[])
    return (
        <div  className='d-flex flex-wrap gap-4 wrap'>
             {/* <input onChange={(event) => setValue(event.target.value)} type="text" placeholder='Search' /> */}
            {meal?.map(el=>{
                return (
                    <div key={el.idMeal} className='card' style={{width:220,height:350}}>
                        <img className='card-img-top' src={el.strMealThumb}/>
                        <div className='card-body mama'>
                            <h5 className='card-title'>{el.strMeal}</h5>
                            <Link to={`/food-info/${el.idMeal}`} className='btn btn-primary '>more</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home