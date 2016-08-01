require('dotenv').config()
var Dropbox = require('dropbox')
var client = new Dropbox({ accessToken: process.env.DROPBOX_KEY})
client.filesListFolder({path: ''})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
