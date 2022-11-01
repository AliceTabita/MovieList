import React, { useState, useEffect } from "react";
import { Container, MovieList, Movie } from "./styles";
function Home() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=pt-BR&page=1&with_genres=14,16`
		)
			.then(response => response.json())
			.then(data => setMovies(data.results));
	}, []);
	document.title = "Animações";
	return (
		<Container>
			<h1>Animações </h1>
			<MovieList>
				{movies.map(movie => {
					return (
						<Movie>
							<a href="https://music.youtube.com/">
								<img
									src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
								/>
							</a>
							<span>{movie.title}</span>
						</Movie>
					);
				})}
			</MovieList>
		</Container>
	);
}
export default Home;
