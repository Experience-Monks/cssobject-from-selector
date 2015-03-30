var test = require('tape');
var cssobjectFromSelector = require('./..');

test('class id precedence', function(t) {

	var cssGet = cssobjectFromSelector( {

		div: {
			height: '50px'
		},

		'#id1': {
			color: '#F0F'
		},

		'.classA': {
			color: '#FFF'
		},

		'.classA.classB': {
			color: '#000',
			width: '100px'
		}
	});

	t.deepEqual(
		cssGet('div#id1.classA.classB'),
		{ color: '#F0F', width: '100px', height: '50px' },
		'merged css objects'
	);
	
	t.end();
});
