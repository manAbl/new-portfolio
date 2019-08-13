const middleware = {}

middleware['pages'] = require('..\\middleware\\pages.js');
middleware['pages'] = middleware['pages'].default || middleware['pages']

export default middleware
