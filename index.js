var merge = require('merge');
var domCSS = require('dom-css');
var parseSelector = require('parse-selector');

module.exports = function cssGet(css) {

	function cssGet(selector) {

		var infoSelector = parseSelector(selector);
		
		if(infoSelector.length === 1) {

			infoSelector = infoSelector[ 0 ];

			return cssGet.fromElIdClassName(infoSelector.el, infoSelector.id, infoSelector.className);	
		} else {

			throw new Error('your selector should select just one element');
		}
	}

	cssGet.fromElIdClassName = function(el, id, className) {

		var cssToApply = [];
		var classNamesSplit = className.split('.').slice(1);
		
		if(css) {

			//individual class
			classNamesSplit.forEach( function(className) {

				className = '.' + className;

				if(css[className]) {
					cssToApply.push(css[className]);
				}
			});

			//longestClass
			for(var i = 1; i < classNamesSplit.length; i++ ) {

				className = '.' + classNamesSplit.slice(0, i + 1).join('.');
				
				if(css[className]) {
					cssToApply.push(css[className]);
				}
			}

			//id
			if(css[id]) {
				cssToApply.push(css[id]);
			}

			//element
			if(css[el]) {
				cssToApply.push(css[el]);
			}
		}

		return merge.apply(undefined, cssToApply);
	};

	return cssGet;
};