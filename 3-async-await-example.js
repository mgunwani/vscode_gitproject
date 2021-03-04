/**
 * Writing JavaScript with async/await
 */

const axios = require('axios');
const fs = require('fs').promises;

/*
async function saveMovies() {
    let response = await axios.get('https://ghibliapi.herokuapp.com/films');
    let movieList = '';
    response.data.forEach(movie => {
        movieList += `${movie['title']}, ${movie['release_date']}\n`;
        console.log(movieList);
    });
}
*/

/*
async function saveMovies() {
    let response = await axios.get('https://ghibliapi.herokuapp.com/films');
    let movieList = '';
    response.data.forEach(movie => {
        movieList += `${movie['title']}, ${movie['release_date']}\n`;
    });
    await fs.writeFile('asyncAwaitMovies.csv', movieList);
    console.log('Saved our list of movies to asyncAwaitMovies.csv');
}
*/

async function saveMovies() {
    try {
        let response = await axios.get('https://ghibliapi.herokuapp.com/films');
        let movieList = '';
        response.data.forEach(movie => {
            movieList += `${movie['title']}, ${movie['release_date']}\n`;
        });
        await fs.writeFile('asyncAwaitMovies.csv', movieList);
        console.log('Saved our list of movies to asyncAwaitMovies.csv');
    } catch (error) {
        console.error(`Could not save the Ghibli movies to a file: ${error}`);
    }
}

saveMovies();