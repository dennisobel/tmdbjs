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
// for get a local copy of the object, but it breaks my test...
//}(this, function(XMLHttpRequest) {
}(this, function() {

  function serializeObject(object) {
    var pairs = [];

    for (var prop in object) {
      if (!object.hasOwnProperty(prop)) {
        continue;
      }
      if (Object.prototype.toString.call(object[prop]) === '[object Object]') {
        pairs.push(object[prop].serialize());
        continue;
      }
      pairs.push(prop + '=' + object[prop]);
    }
    return pairs.join('&');
  }

  var tmdb = (function (){
    var _apikey = undefined;
    var _baseUrl = 'http://api.themoviedb.org/3/';
    var _debug = false;

    function init (options) {
      _apikey = options.apikey;
      _debug = options.debug ? true : false;
      return this;
    }

    var _getUrl = function(method, params) {
      var url = _baseUrl + method;
      params = params || {};
      params.api_key = _apikey;

      params = serializeObject(params);
      url += '?' + params;

      return url;
    };

    var _getRequestType = function(method) {
      return 'GET';
    };

    var _parseResponse = function(method, xhr) {
      var data = JSON.parse(xhr.responseText);
      if (data.data) {
        data = data.data;
      }
      return data;
    };

    var _doRequest = function(method, params, error, success) {
      if( typeof params === 'function') {
        success = error | null;
        error = params;
        params = {};
      }

      var xhr = XMLHttpRequest ? new XMLHttpRequest({mozSystem: true}) :
        new window.ActiveXObject('Microsoft.XMLHTTP');

      var requestType = _getRequestType.call(this, method);
      var url = _getUrl.call(this, method, params);

      xhr.open(requestType, url, true);

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status < 400) {
            var response = _parseResponse(method, xhr);
            if (typeof success === 'function') {
              success(response);
            }
        }
      };

      xhr.onerror =function(xhr) {
        if (typeof error === 'function') {
          error(xhr);
        }
      };

      xhr.send();
    };

    function getConfiguration(error, success) {
      var method = 'configuration';
      _doRequest.call(this, method, null, error, success);
    }

    function getMoviesUpcoming(error, success) {
      var method = 'movie/upcoming';
      _doRequest.call(this, method, null, error, success);
    }

    function getMoviesNowPlaying(error, success) {
      var method = 'movie/now_playing';
      _doRequest.call(this, method, null, error, success);
    }

    function getMovieLatest(error, success) {
      var method = 'movie/latest';
      _doRequest.call(this, method, null, error, success);
    }

    function getMoviesTopRated(error, success) {
      var method = 'movie/top_rated';
      _doRequest.call(this, method, null, error, success);
    }

    function getMoviesPopular(error, success) {
      var method = 'movie/popular';
      _doRequest.call(this, method, null, error, success);
    }

    function getMovie(movieid, error, success) {
      var method = 'movie/' + movieid;
      _doRequest.call(this, method, null, error, success);
    }

    function getMoviesSimilarTo(movieid, error, success) {
      var method = 'movie/' + movieid + '/similar';
      _doRequest.call(this, method, null, error, success);
    }

    function getMovieReviews(movieid, error, success) {
      var method = 'movie/' + movieid + '/reviews';
      _doRequest.call(this, method, null, error, success);
    }

    function getMovieRating(movieid, error, success) {
      var method = 'movie/' + movieid + '/rating';
      _doRequest.call(this, method, null, error, success);
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
      getMovieReviews: getMovieReviews,
      getMovieRating: getMovieRating,
      _getUrl: _getUrl,
      _doRequest: _doRequest
    };
  }());

  return tmdb;
}));
