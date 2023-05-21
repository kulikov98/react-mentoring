export const createMovieObj = (formData: FormData) => {
    const movieObj: any = {};
    formData.forEach((value, key) => (movieObj[key] = value));
    movieObj.id = Number(movieObj.id);
    movieObj.runtime = Number(movieObj.runtime);
    movieObj.vote_average = Number(movieObj.vote_average);
    movieObj.genres = movieObj.genres.split(',');

    return movieObj;
}
