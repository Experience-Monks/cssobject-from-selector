# cssobject-from-selector

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Pass an object defining css a function will be returned. Pass selectors to the returned function to get merged css objects

## Usage

[![NPM](https://nodei.co/npm/cssobject-from-selector.png)](https://www.npmjs.com/package/cssobject-from-selector)

```javascript
var cssFromSelector = require('cssobject-from-selector');

var getCSS = cssFromSelector( {

    'div': {
        width: '100px'
    },

    'ul': {
        width: '50px'
    },

    '.red': {
        color: '#F00'
    },

    '.red.tall': {
        height: '100px'
    },

    '.red.small': {
        height: '50px'
    }
});

var css = getCSS('div.red.tall');

// css will be
// {
//  width: '100px',
//  height: '100px',
//  color: '#F00'
// }
```

## License

MIT, see [LICENSE.md](http://github.com/Jam3/cssobject-from-selector/blob/master/LICENSE.md) for details.
