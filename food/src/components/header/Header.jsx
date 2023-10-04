import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (searchQuery.trim() === '') {
                setSearchResults([]);
                return;
            }

            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
                const data = await response.json();

                if (data.meals) {
                    setSearchResults(data.meals);
                } else {
                    setSearchResults([]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchSearchResults();
    }, [searchQuery]);

    return (
        <header className='sticky-top'>
            <div>
                <Link to='/'>
                    <img src='https://www.themealdb.com/images/logo-small.png' alt='' />
                </Link>
            </div>
            <nav>
                <div className='menu-items'>
                    <Link to='/' href="">Home</Link>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Enter a meal name"
                    />

                </div>
            </nav>
        </header>
    )
}

export default Header