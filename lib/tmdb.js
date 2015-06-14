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

    function getConfiguration(callback) {
      var method = 'configuration';
      _doRequest(method, null, callback);
    }

    function getMoviesUpcoming(callback) {
      var method = 'movie/upcoming';
      _doRequest(method, null, callback);
    }

    function getMoviesNowPlaying(callback) {
      var method = 'movie/now_playing';
      _doRequest(method, null, callback);
    }

    function getMovieLatest(callback) {
      var method = 'movie/latest';
      _doRequest(method, null, callback);
    }

    function getMoviesTopRated(callback) {
      var method = 'movie/top_rated';
      _doRequest(method, null, callback);
    }

    function getMoviesPopular(callback) {
      var method = 'movie/popular';
      _doRequest(method, null, callback);
    }

    function getMovie(movieid, callback) {
      var method = 'movie/' + movieid;
      _doRequest(method, null, callback);
    }

    function getMoviesSimilarTo(movieid, callback) {
      var method = 'movie/' + movieid + '/similar';
      _doRequest(method, null, callback);
    }

    function getMovieCredits(movieid, callback) {
      var method = 'movie/' + movieid + '/credits';
      _doRequest(method, null, callback);
    }

    function getMovieImages(movieid, callback) {
      var method = 'movie/' + movieid + '/images';
      _doRequest(method, null, callback);
    }

    function getMovieKeywords(movieid, callback) {
      var method = 'movie/' + movieid + '/keywords';
      _doRequest(method, null, callback);
    }

    function getMovieVideos(movieid, callback) {
      var method = 'movie/' + movieid + '/videos';
      _doRequest(method, null, callback);
    }

    function getMovieReviews(movieid, callback) {
      var method = 'movie/' + movieid + '/reviews';
      _doRequest(method, null, callback);
    }

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
