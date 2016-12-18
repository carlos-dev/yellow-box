var Gpio = require('onoff').Gpio
var EventEmitter = require('events').EventEmitter
var sensorEmitter = new EventEmitter();
const log = require('./log')

const PIN = 7
var pirSensor = new Gpio(PIN, 'in', 'both')

log('info', 'sensor initialized')

pirSensor.watch((err, value) => {
  	if (err) {
		log('error', err.message)
   		throw Error(err.message)
  	}
  	if (value === 1) {
		log('info', 'sensor: hight')
		sensorEmitter.emit('start')
  	} else {
		log('info', 'sensor: low')
		sensorEmitter.emit('stop')
	}
})

process.on('SIGINT', () => {
  log('info', 'Received SIGINT')
  pirSensor.unexport()
  process.exit()
})

module.exports = sensorEmitter
