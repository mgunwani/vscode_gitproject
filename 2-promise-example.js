/**
 * Using Promises for Concise Asynchronous Programming
 */

const axios = require('axios');
const fs = require('fs').promises;

/*
axios.get('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        console.log('Successfully retrieved our list of movies');
        response.data.forEach(movie => {
            console.log(`${movie['title']}, ${movie['release_date']}`);
        });
    })
    .catch((error) => { console.log('There are some errors..!!') })
*/

axios.get('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        console.log('Successfully retrieved our list of movies');
        let movieList = '';
        response.data.forEach(movie => {
            movieList += `${movie['title']}, ${movie['release_date']}\n`;
        });
        fs.writeFile('promiseMovies.csv', movieList);
        console.log('Saved our list of movies to promiseMovies.csv');
    })
    .catch((error) => { console.error(`Could not save the Ghibli movies to a file: ${error}`); });