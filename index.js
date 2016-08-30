var randomPlayer = require('./random-player')
var sensor = require('./sensor')

console.log('Sensor & player ready')

sensor.on('start', () => {
	console.log('play')
	randomPlayer.play()
})
sensor.on('stop', () => {
	console.log('stop')
        randomPlayer.stop()
})
