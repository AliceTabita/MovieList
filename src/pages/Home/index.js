import React from "react";
import { Container, MovieList, Movie } from "./styles";
function Home() {
	const movies = [
		{
			title: "Spider Man",
			img_url:
				"https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_HOMEM%20ARANHA%203.JPG"
		},
		{
			title: "Spider Man",
			img_url:
				"https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_HOMEM%20ARANHA%203.JPG"
		},
		{
			title: "Spider Man",
			img_url:
				"https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_HOMEM%20ARANHA%203.JPG"
		}
	];
	return (
		<Container>
			<h1>filmes</h1>
			<MovieList>
				{movies.map(movie => {
					return (
						<Movie>
							<a href="https://music.youtube.com/">
								<img src={movie.img_url} />
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
