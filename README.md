# tmdbjs
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

## getConfiguration
You can get the tmdb configuration using this function. If the request
fails, you can check the error information using the error callback,
otherwise, you can check the configuration data using the success
callback.

```Javascript
tmdb.getConfiguration(error, success);
```

## getMoviesUpcoming

```Javascript
tmdb.getMoviesUpcoming(error, success);
```

## getMoviesNowPlaying

```Javascript
tmdb.getMoviesNowPlaying(error, success);
```

## getMovieLatest

```Javascript
tmdb.getMovieLatest(error, success);
```

## getMoviesTopRated

```Javascript
tmdb.getMoviesTopRated(error, success);
```

## getMoviesPopular

```Javascript
tmdb.getMoviesPopular(error, success);
```

## getMovie

```Javascript
tmdb.getMovie(movieid, error, success);
```

## getMoviesSimilarTo

```Javascript
tmdb.getMoviesSimilarTo(movieid, error, success);
```

## getMovieReviews

```Javascript
tmdb.getMovieReviews(movieid, error, success);
```

## getMovieRating

```Javascript
tmdb.getMovieReviews(movieid, error, success);
```

## More methods are coming!
