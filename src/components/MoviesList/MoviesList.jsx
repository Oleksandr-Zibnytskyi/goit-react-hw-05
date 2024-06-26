import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import PropTypes from 'prop-types';

export default function MovieList({ movies }) {
    const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
    const location = useLocation();

    const poster = (movie) => {
        const { id, title, poster_path } = movie;
        const posterUrl = poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultImg;
        return { posterUrl, id, title };
    }

    return (
        <ul className={css.movieList}>
            {movies.map(movie => {
                const { posterUrl, id, title } = poster(movie);
                return (
                    <li key={id} className={css.movieCard}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>
                            <img src={posterUrl} alt={title} className={css.poster} />
                        </Link> 
                    </li>
                );
            })}
        </ul>
    );
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string
        })
    ).isRequired,
};
  














