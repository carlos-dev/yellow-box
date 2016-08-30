var Gpio = require('onoff').Gpio
var EventEmitter = require('events').EventEmitter
var sensorEmitter = new EventEmitter();

const PIN = 7
var pirSensor = new Gpio(PIN, 'in', 'both')
pirSensor.watch((err, value) => {
  	if (err) {
   		 throw Error(err.message)
  	}
  	if (value === 1) {
		sensorEmitter.emit('start')
  	} else {
		sensorEmitter.emit('stop')
	}
})

process.on('SIGINT', () => {
  console.log('Received SIGINT')
  pirSensor.unexport()
  process.exit()
})

module.exports = sensorEmitter
