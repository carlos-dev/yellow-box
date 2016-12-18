const winston = require('winston')

winston.add(winston.transports.File, { filename: 'app.log' })

module.exports = function(type, message) {
	winston.log(type, message)
}
