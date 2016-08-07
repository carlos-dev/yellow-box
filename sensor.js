var Gpio = require('onoff').Gpio

const PIN = 21
var pirSensor = new Gpio(PIN, 'in', 'rising')

pirSensor.watch((err, value) => {
  if (err) {
    throw Error(err.message)
  }
  if (value === 1) {
    console.log(value)
  }
})

process.on('SIGINT', () => {
  console.log('Received SIGINT')
  pirSensor.unexport()
  process.exit()
})
