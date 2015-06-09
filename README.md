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

# Implemented Methods:

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

## getConfiguration
Get configuration of the TMDB service. [Check the response](http://docs.themoviedb.apiary.io/#reference/configuration/get)

```Javascript
tmdb.getConfiguration(callback);
```

## getMoviesUpcoming
Get the movies that are upcoming to cinemas or theaters. [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/upcoming/get)

```Javascript
tmdb.getMoviesUpcoming(callback);
```

## getMoviesNowPlaying
Get the list of movies that are playing in cinemas o theaters. [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movienowplaying/get)

```Javascript
tmdb.getMoviesNowPlaying(callback);
```

## getMovieLatest
Get the last movie id of TMDB service. [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movielatest/get)

```Javascript
tmdb.getMovieLatest(callback);
```

## getMoviesTopRated
Get most rated movies of TMDB. [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movietoprated/get)


```Javascript
tmdb.getMoviesTopRated(callback);
```

## getMoviesPopular
Get most popular movies of TMDB. [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movietoprated/get)


```Javascript
tmdb.getMoviesPopular(callback);
```

## getMovie
Get a movie given an TMDB id. [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieid/get)

```Javascript
tmdb.getMovie(movieid, callback);
```

## getMoviesSimilarTo
Get movies similar to another given an id. [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidsimilar/get)

```Javascript
tmdb.getMoviesSimilarTo(movieid, callback);
```

## getMovieCredits
Get credits of a movie given its id. [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidcredits/get)

```Javascript
tmdb.getMovieCredits(movieid, callback);
```

## getMovieImages
Get images of a movie given its id. [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidimages/get)

```Javascript
tmdb.getMovieImages(movieid, callback);
```

## getMovieKeywords
Get keywords of a movie given its id. [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidkeywords/get)

```Javascript
tmdb.getMovieKeywords(movieid, callback);
```

## getMovieVideos
Get videos of a movie given its id. [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidvideos/get)

```Javascript
tmdb.getMovieVideos(movieid, callback);
```

## getMovieReviews
Get reviews of a movie given its id. [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidreviews/get)

```Javascript
tmdb.getMovieReviews(movieid, callback);
```

## getMovieRating
Get the rating of a movie given its id. [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidrating/get)

```Javascript
tmdb.getMovieReviews(movieid, callback);
```

==========================
## More methods are coming!
==========================
