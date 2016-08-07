require('dotenv').config()
var Player = require('player')
var colors = require('colors')
var fs = require('fs')
var shuffle = require('lodash/shuffle')

const addPath = (fileName) => {
  return `${process.env.MUSIC_FOLDER}/${fileName}`
}

const isMP3 = (fileName) => {
  return /\.mp3$/.test(fileName)
}

const getRandomizedPlaylist = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(process.env.MUSIC_FOLDER, (err, files) => {
      if (err) {
        reject(err.message)
      }
      resolve(shuffle(files.filter(isMP3).map(addPath)))
    })
  })
}

getRandomizedPlaylist().then((files) => {
  var player = new Player(files)
  console.log(colors.yellow('Playlist: ' + files))
  player.play()
  player.on('playing', ({src, _name}) => {
    console.log(colors.red('Playing ' + _name))
  })
  player.on('error', () => {
    // playlist end
    player.play()
  })
})
