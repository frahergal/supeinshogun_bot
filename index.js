const sharp = require("sharp");

// SVG to PNG converter
sharp("files/svg/spain.svg")
  .png()
  .toFile("files/svg/spain.png")
  .then(function(info) {
    console.log(info)
  })
  .catch(function(err) {
    console.log(err)
  });