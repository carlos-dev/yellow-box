var RandomPlayer = require('./random-player')

var player = new RandomPlayer()
player.play()

setTimeout(() => {
  player.stop()
}, 3000)
