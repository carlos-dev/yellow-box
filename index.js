var randomPlayer = require('./random-player')
var sensor = require('./sensor')
const log = require('./log')

log('info', 'initializing app')

sensor.on('start', () => {
	randomPlayer.play()
})
sensor.on('stop', () => {
        randomPlayer.stop()
})
