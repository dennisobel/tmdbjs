# tmdbjs
[![Build Status](https://travis-ci.org/gabrielperales/tmdbjs.svg?branch=master)](https://travis-ci.org/gabrielperales/tmdbjs)
[![Code Climate](https://codeclimate.com/github/gabrielperales/tmdbjs/badges/gpa.svg)](https://codeclimate.com/github/gabrielperales/tmdbjs)
[![Test Coverage](https://codeclimate.com/github/gabrielperales/tmdbjs/badges/coverage.svg)](https://codeclimate.com/github/gabrielperales/tmdbjs/coverage)
[![Dependencies Status](https://david-dm.org/gabrielperales/tmdbjs.svg?theme=shields.io)](https://david-dm.org/gabrielperales/tmdbjs)
[![DevDependencies Status](https://david-dm.org/gabrielperales/tmdbjs/dev-status.svg?theme=shields.io)](https://david-dm.org/gabrielperales/tmdbjs#info=devDependencies)

The movie database API wrapper for JavaScript.

You can check the original documentation about The movie database API
[here](http://docs.themoviedb.apiary.io/).


# Initialize

You can initialize the wrapper using the init method with a object
containing your api key:

```Javascript
var tmdb = tmdb.init({ apikey: YOUR_API_KEY });
```

# How to use:

Callbacks follows the NodeJS convention. You should check the first
parameter of the callback to know if an error has ocurred. Otherwise,
you will get the requested data in the second parameter of the callback.

Error hangling usually follows the format of the snippet behind this lines:

```Javascript
tmdb.getConfiguration(function(error, data){
  if (error) {
    throw (error);
  }

  doSomething(data);
});
```
# API

* [`init(options)`](#init-options-)
* [`getConfiguration(callback)`](#getconfiguration-callback-)
* [`getMoviesUpcoming(callback)`](#getmoviesupcoming-callback-)
* [`getMoviesNowPlaying(callback)`](#getmoviesnowplaying-callback-)
* [`getMovieLatest(callback)`](#getmovielatest-callback-)
* [`getMoviesTopRated(callback)`](#getmoviestoprated-callback-)
* [`getMoviesPopular(callback)`](#getmoviespopular-callback-)
* [`getMovie(movieid, callback)`](#getmovie-movieid-callback-)
* [`getMoviesSimilarTo(movieid, callback)`](#getmoviessimilarto-movieid-callback-)
* [`getMovieCredits(movieid, callback)`](#getmoviecredits-movieid-callback-)
* [`getMovieImages(movieid, callback)`](#getmovieimages-movieid-callback-)
* [`getMovieKeywords(movieid, callback)`](#getmoviekeywords-movieid-callback-)
* [`getMovieVideos(movieid, callback)`](#getmovievideos-movieid-callback-)
* [`getMovieReviews(movieid, callback)`](#getmoviereviews-movieid-callback-)
* [`getMovieRating(movieid, callback)`](#getmovierating-movieid-callback-)
* [`search(query, callback)`](#search-query-callback-)
* [`searchMovie(query, callback)`](#searchmovie-query-callback-)

### `init(options)`
* **options** (`object`) - Object with the configuration of the wrapper
* **options.apikey** (`string`) - TMDB api key

Initialize the configuration of the wrapper
### `getConfiguration(callback)`
* **callback** (`function`) - Callback

Get the configuration of the TMDB service.
[Check the response](http://docs.themoviedb.apiary.io/#reference/configuration/get)
### `getMoviesUpcoming(callback)`
* **callback** (`function`) - Callback

Get the movies that are upcoming to cinemas and theaters.
[Check the response](http://docs.themoviedb.apiary.io/#reference/movies/upcoming/get)
### `getMoviesNowPlaying(callback)`
* **callback** (`function`) - Callback

Get movies which are playing on cinemas and theaters.
 [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movienowplaying/get)
### `getMovieLatest(callback)`
* **callback** (`function`) - Callback where you will get an error or the data of the movie.

Get the latest movie uploaded to TMDB.
[Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movielatest/get)
### `getMoviesTopRated(callback)`
* **callback** (`function`) - Callback

Get movies top rated.
[Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movietoprated/get)
### `getMoviesPopular(callback)`
* **callback** (`function`) - Callback

Get most popular movies.
[Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movietoprated/get)
### `getMovie(movieid, callback)`
* **movieid** (`number`) - The movie id which you are requesting for.
* **callback** (`function`) - Callback

Get a movie by it id.
[Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieid/get)
### `getMoviesSimilarTo(movieid, callback)`
* **movieid** (`number`) - The movie id which you are requesting for similar movies.
* **callback** (`function`) - Callback

Get similar movies to a movie given its id
[Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidsimilar/get)
### `getMovieCredits(movieid, callback)`
* **movieid** (`number`) - The movie id which you are requesting for its credits.
* **callback** (`function`) - Callback

Get credits from a movie given its id.
[Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidcredits/get)
### `getMovieImages(movieid, callback)`
* **movieid** (`number`) - Id of the movie.
* **callback** (`function`) - Callback

Get images from a movie given its id.
[Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidimages/get)
### `getMovieKeywords(movieid, callback)`
* **movieid** (`number`) - Id of the movie.
* **callback** (`function`) - Callback

Get keywords of a movie given its id.
[Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidkeywords/get)
### `getMovieVideos(movieid, callback)`
* **movieid** (`number`) - Id of the movie.
* **callback** (`function`) - Callback

Get videos of a movie given its id.
[Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidvideos/get)
### `getMovieReviews(movieid, callback)`
* **movieid** (`number`) - Id of the movie.
* **callback** (`function`) - Callback

Get review of a movie given its id.
[Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidreviews/get)
### `getMovieRating(movieid, callback)`
* **movieid** (`number`) - Id of the movie.
* **callback** (`function`) - Callback

Get rating of a movie given its id.
[Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidrating/get)
### `search(query, callback)`
* **query** (`object`) - Object
* **query.query** (`string`) - Query
* **query.page** (`number`) - Min 1, max 1000
* **query.language** (`string`) - Language on ISO 639-1 code
* **query.include_adult** (`boolean`) - Flag for include adult content
* **callback** (`function`) - Callback

Search the movie, tv show and person with a single query.
### `searchMovie(query, callback)`
* **query** (`object`) - Object
* **query.query** (`string`) - Title
* **query.page** (`number`) - Min 1, max 1000
* **query.language** (`string`) - Language on ISO 639-1 code
* **query.include_adult** (`boolean`) - Flag for include adult content
* **query.year** (`number`) - Filter the results release dates
* **callback** (`function`) - Callback

Search for movies by title.
