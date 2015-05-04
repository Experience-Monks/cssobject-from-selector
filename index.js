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

		var cssToApply = {};
		var classNamesSplit = className ? className.split('.').slice(1) : [];
		
		if(css) {

			//individual class
			classNamesSplit.forEach( function(className) {

				className = '.' + className;

				if(css[className]) {
					cssToApply = merge(cssToApply, css[className]);
				}
			});

			//longestClass
			for(var i = 1; i < classNamesSplit.length; i++ ) {

				className = '.' + classNamesSplit.slice(0, i + 1).join('.');
				
				if(css[className]) {
					cssToApply = merge(cssToApply, css[className]);
				}
			}

			//id
			if(css[id]) {
				cssToApply = merge(cssToApply, css[id]);
			}

			//element
			if(css[el]) {
				cssToApply = merge(cssToApply, css[el]);
			}
		}

		return cssToApply;
	};

	return cssGet;
};