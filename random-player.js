require('dotenv').config()
const log = require('./log')
var colors = require('colors')
var omx = require('omxdirector')
var fs = require('fs')
var shuffle = require('lodash/shuffle')

log('info', 'initializing random player')

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
	log('error', err.message)
      }
      resolve(shuffle(files.filter(isMP3).map(addPath)))
    })
  })
}

const play = () => {
	getRandomizedPlaylist().then((files) => {
		log('info', 'playing: ' + files[0])
		omx.play(files, {loop: true})
	})
}

const stop = () => {
	log('info', 'stop')
	omx.stop()
}

module.exports = {
	play,
	stop
}
