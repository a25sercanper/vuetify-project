import.meta.env.VITE_API_KEY;

export const searchMovies = async (searchString) => {
    const url =`http://www.omdbapi.com/?s=${searchString}&apikey=${import.meta.env.VITE_API_KEY}`;

    const response = await fetch(url);

    const datos = await response.json();

    return datos;
}

export  const getMovieDetails = async (id) => {
    const url =`http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`;

    const response = await fetch(url);

    const datos = await response.json();

    return datos;
}