import React from 'react';
import card from '../style/components/card.css';
import { ReactComponent as Arrow } from '../img/arrow.svg';


const Card = ({ movie }) => {

  const Formdate = (date) => {
    let [yy, dd, mm] = date.split("-");
    return [dd, mm, yy].join("/");
  }

  const addStorage = () => {
    let storeData = localStorage.movies ? localStorage.movies.split(",") : [];

    if (!storeData.includes(movie.id.toString())) {
      storeData.push(movie.id);
      localStorage.movies = storeData;
    }
  };

  const removeStorage = () => {
    let storeData = localStorage.movies.split(",");
    let newData = storeData.filter((id) => id != movie.id);
    localStorage.movies = newData;
  }

  return (
    <div className='card'>
      <article>
        <img src={movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : "./img/film-base.jpg"} alt="affiche des films" />
      </article>
      <div className='titr'>
        <h3>{movie.title}</h3>
        <section>
          <Arrow />
        </section>
      </div>
      {movie.release_date ? <h5>Sortie le  {Formdate(movie.release_date)}</h5> : "(Date de sortie non fournie)"}
      {movie.overview ? <h4>Synopsis :</h4> : "Synopsis non fournie"}
      <p>{movie.overview}</p>

      {movie.genre_ids ? (
        <button className='favori' onClick={() => addStorage()}>Ajouter aux favoris</button>)
        : (<div className='favori' onClick={() => {
          removeStorage();
          window.location.reload();
        }}>
          Supprimer
          </div>
        )}

    </div>
  );
};

export default Card;