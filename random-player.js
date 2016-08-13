require('dotenv').config()
var colors = require('colors')
var omx = require('omxdirector')
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

const play = () => {
	getRandomizedPlaylist().then((files) => {
		omx.play(files, {loop: true})
		console.log(colors.yellow(files))
	})
}

const stop = () => {
	console.log(colors.red('Stop'))
	omx.stop()
}

module.exports = {
	play,
	stop
}
