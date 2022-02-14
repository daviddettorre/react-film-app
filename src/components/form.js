import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card';
import form from '../style/components/form.css';

const Form = () => {

    const [moviesData, setMoviesData] = useState([]);
    const[search, setSearch] = useState("a");
    const[sortBest] = useState("theBest");

    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/search/movie/?api_key=be27fb0fff2ddb09bb5f91fe40e74348&query=${search}&language=fr-FR`
        )
            .then((res => setMoviesData(res.data.results)))
    }, [search]);

    return (
        <div className='formcomponent'>
            <div className='formcontainer'>
                <form>
                    <label>Rechercher un film</label>
                    <input type="text" placeholder='🔎 ...' id="search-input" onChange={(e) => setSearch(e.target.value)}></input>
                </form>
            </div>
            <div className='result'>
                {moviesData
                .slice(0, 15)
                .sort((a, b) => {
                    if(sortBest === "theBest"){
                        return b.vote_average - a.vote_average;                        
                    }
                })
                .map((movie) => (<Card key={movie.id} movie={movie} />))}
            </div>
        </div>
    );
};

export default Form;