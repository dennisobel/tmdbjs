// Uses AMD or browser globals to create a module.

// Grabbed from https://github.com/umdjs/umd/blob/master/amdWeb.js.
// Check out https://github.com/umdjs/umd for more patterns.

// If you do not want to support the browser global path, then you
// can remove the `root` use and the passing `this` as the first arg to
// the top function.
//
(function(root, factory) {
  'use strict';

  if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('xmlhttprequest').XMLHttpRequest);
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['XMLHttpRequest'], factory);
  } else {
    // Global Variables
    root.tmdb = factory(XMLHttpRequest);
  }
// TODO In theory I should pass a XMLHttpRequest as a argument
// for get a local copy of the object, but it breaks my tests...
//}(this, function(XMLHttpRequest) {
}(this, function() {
  'use strict';
  function _serializeObject(object) {
    var pairs = [];

    for (var prop in object) {
      if (!object.hasOwnProperty(prop)) {
        continue;
      }
      if (Object.prototype.toString.call(object[prop]) === '[object Object]') {
        pairs.push(_serializeObject(object[prop]));
        continue;
      }
      pairs.push(prop + '=' + object[prop]);
    }
    return pairs.join('&');
  }

  var tmdb = (function (){
    var _apikey,
      _baseUrl = 'http://api.themoviedb.org/3/',
      _debug = false;

    /**
     * Initialize the configuration of the wrapper
     *
     * @param {object} options - Object with the configuration of the wrapper
     * @param {string} options.apikey - TMDB api key
     * @api public
     */
    function init (options) {
      _apikey = options.apikey;
      _debug = options.debug ? true : false;
      return this;
    }

    var _getUrl = function(method, params) {
      var url = _baseUrl + method;
      params = params || {};
      params.api_key = _apikey;

      params = _serializeObject(params);
      url += '?' + params;

      return url;
    };

    var _getRequestType = function() {
      return 'GET';
    };

    var _parseResponse = function(method, xhr) {
      var data = JSON.parse(xhr.responseText);
      if (data.data) {
        data = data.data;
      }
      return data;
    };

    var _doRequest = function(method, params, callback) {
      var xhr = XMLHttpRequest ? new XMLHttpRequest({mozSystem: true}) :
        new window.ActiveXObject('Microsoft.XMLHTTP');

      var requestType = _getRequestType.call(this, method);
      var url = _getUrl(method, params);

      xhr.open(requestType, url, true);

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status < 400) {
            var response = _parseResponse(method, xhr);
            if (typeof callback === 'function') {
              callback(null, response);
            }
        }
      };

      xhr.onerror =function(xhr) {
        if (typeof callback === 'function') {
          callback(xhr);
        }
      };

      xhr.send();
    };

    /**
     * Get the configuration of the TMDB service.
     * [Check the response](http://docs.themoviedb.apiary.io/#reference/configuration/get)
     *
     * @param {function} callback - Callback
     * @api public
     */
    function getConfiguration(callback) {
      var method = 'configuration';
      _doRequest(method, null, callback);
    }

    /**
     * Get the movies that are upcoming to cinemas and theaters.
     * [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/upcoming/get)
     *
     * @param {function} callback - Callback
     * @api public
     */
    function getMoviesUpcoming(callback) {
      var method = 'movie/upcoming';
      _doRequest(method, null, callback);
    }

    /**
     * Get movies which are playing on cinemas and theaters.
     *  [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movienowplaying/get)
     *
     * @param {function} callback - Callback
     * @api public
     */
    function getMoviesNowPlaying(callback) {
      var method = 'movie/now_playing';
      _doRequest(method, null, callback);
    }

    /**
     * Get the latest movie uploaded to TMDB.
     * [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movielatest/get)
     *
     * @param {function} callback - Callback where you will get an error or the data of the movie.
     * @api public
     */
    function getMovieLatest(callback) {
      var method = 'movie/latest';
      _doRequest(method, null, callback);
    }

    /**
     * Get movies top rated.
     * [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movietoprated/get)
     *
     * @param {function} callback - Callback
     * @api public
     */
    function getMoviesTopRated(callback) {
      var method = 'movie/top_rated';
      _doRequest(method, null, callback);
    }

    /**
     * Get most popular movies.
     * [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movietoprated/get)
     *
     * @param {function} callback - Callback
     * @api public
     */
    function getMoviesPopular(callback) {
      var method = 'movie/popular';
      _doRequest(method, null, callback);
    }

    /**
     * Get a movie by it id.
     * [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieid/get)
     *
     * @param {number} movieid - The movie id which you are requesting for.
     * @param {function} callback - Callback
     * @api public
     */
    function getMovie(movieid, callback) {
      var method = 'movie/' + movieid;
      _doRequest(method, null, callback);
    }

    /**
     * Get similar movies to a movie given its id
     * [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidsimilar/get)
     *
     * @param {number} movieid - The movie id which you are requesting for similar movies.
     * @param {function} callback - Callback
     * @api public
     */
    function getMoviesSimilarTo(movieid, callback) {
      var method = 'movie/' + movieid + '/similar';
      _doRequest(method, null, callback);
    }

    /**
     * Get credits from a movie given its id.
     * [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidcredits/get)
     *
     * @param {number} movieid - The movie id which you are requesting for its credits.
     * @param {function} callback - Callback
     * @api public
     */
    function getMovieCredits(movieid, callback) {
      var method = 'movie/' + movieid + '/credits';
      _doRequest(method, null, callback);
    }

    /**
     * Get images from a movie given its id.
     * [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidimages/get)
     *
     * @param {number} movieid - Id of the movie.
     * @param {function} callback - Callback
     * @api public
     */
    function getMovieImages(movieid, callback) {
      var method = 'movie/' + movieid + '/images';
      _doRequest(method, null, callback);
    }

    /**
     * Get keywords of a movie given its id.
     * [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidkeywords/get)
     *
     * @param {number} movieid - Id of the movie.
     * @param {function} callback - Callback
     * @api public
     */
    function getMovieKeywords(movieid, callback) {
      var method = 'movie/' + movieid + '/keywords';
      _doRequest(method, null, callback);
    }

    /**
     * Get videos of a movie given its id.
     * [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidvideos/get)
     *
     * @param {number} movieid - Id of the movie.
     * @param {function} callback - Callback
     * @api public
     */
    function getMovieVideos(movieid, callback) {
      var method = 'movie/' + movieid + '/videos';
      _doRequest(method, null, callback);
    }

    /**
     * Get review of a movie given its id.
     * [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidreviews/get)
     *
     * @param {number} movieid - Id of the movie.
     * @param {function} callback - Callback
     * @api public
     */
    function getMovieReviews(movieid, callback) {
      var method = 'movie/' + movieid + '/reviews';
      _doRequest(method, null, callback);
    }

    /**
     * Get rating of a movie given its id.
     * [Check the response](http://docs.themoviedb.apiary.io/#reference/movies/movieidrating/get)
     *
     * @param {number} movieid - Id of the movie.
     * @param {function} callback - Callback
     * @api public
     */
    function getMovieRating(movieid, callback) {
      var method = 'movie/' + movieid + '/rating';
      _doRequest(method, null, callback);
    }

    return {
      init: init,
      getConfiguration: getConfiguration,
      getMoviesUpcoming: getMoviesUpcoming,
      getMoviesNowPlaying: getMoviesNowPlaying,
      getMoviesTopRated: getMoviesTopRated,
      getMoviesPopular: getMoviesPopular,
      getMovie: getMovie,
      getMovieLatest: getMovieLatest,
      getMoviesSimilarTo: getMoviesSimilarTo,
      getMovieCredits: getMovieCredits,
      getMovieImages: getMovieImages,
      getMovieKeywords: getMovieKeywords,
      getMovieVideos: getMovieVideos,
      getMovieReviews: getMovieReviews,
      getMovieRating: getMovieRating
    };
  }());

  return tmdb;
}));
