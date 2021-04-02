const sharp = require("sharp");

sharp("files/svg/spain.svg")
  .png()
  .toFile("files/svg/spain.png")
  .then(function(info) {
    console.log(info)
  })
  .catch(function(err) {
    console.log(err)
  });

let i = 0;
while (true) {
i++;
console.log("🍆🍆🍆");
}
