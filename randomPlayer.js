var fs = require('fs')
require('dotenv').config()

fs.readdir(process.env.MUSIC_FOLDER, (err, files) => {
  if (err) {
    throw Error(err.message)
  }
  console.log(files)
})
