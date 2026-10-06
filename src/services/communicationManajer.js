export const searchMovies = async (searchString) => {
    const url =`http://www.omdbapi.com/?s=${searchString}&apikey=${process.env.API_KEY}`;

    const response = await fetch(url);

    const datos = await response.json();

    return datos;
}

export  const getMovieDetails = async (id) => {
    const url =`http://www.omdbapi.com/?i=${id}&apikey=${process.env.API_KEY}`;

    const response = await fetch(url);

    const datos = await response.json();

    return datos;
}