var Player = require('player')

const player = new Player('./music/test.mp3')

player.play(({player}) => {
  console.log('play end!')
})

setTimeout(() => {
  player.stop()
}, 3000)
