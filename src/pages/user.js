import { React, useEffect, useState } from 'react';
import Header from '../components/header';
import user from '../style/pages/user.css';
import axios from 'axios';
import Card from '../components/card';

const User = () => {

  const [listData, setListData] = useState([]);

  useEffect(() => {

    let moviesId = localStorage.movies ? localStorage.movies.split(",") : [];

    for (let i = 0; i < moviesId.length; i++) {


      axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=be27fb0fff2ddb09bb5f91fe40e74348&language=fr-FR`)
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, [])

  return (
    <div className='filmfavori'>
      <Header />
      <h2>Films Favoris 🤩</h2>
      
      <div className='result'>
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)) 
            : (<h2>Aucun film favoris pour le moment..</h2>
          )}
      </div>
    </div>
  );
};

export default User;
