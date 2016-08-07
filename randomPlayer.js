var fs = require('fs')
var shuffle = require('lodash/shuffle')
require('dotenv').config()

fs.readdir(process.env.MUSIC_FOLDER, (err, files) => {
  if (err) {
    throw Error(err.message)
  }
  console.log(shuffle(files))
})
