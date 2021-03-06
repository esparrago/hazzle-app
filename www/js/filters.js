

/**
 * Description:
 *     removes white space from text. useful for html values that cannot have spaces
 * Usage:
 *   {{some_text | nospace}}
 */

angular.module('starter.filters', [])

	.filter('nospace', function () {
	    return function (value) {
	        return (!value) ? '' : value.replace(/ /g, '');
	    };
	})

	.filter('reverse', function() {
	    return function(items) {
	      return angular.isArray(items)? items.slice().reverse() : [];
	    };
  	})

	.filter('deletechars', function () {
	    return function (value) {
	        return value.slice(9,50);
	    };
	});

