const gkm = require('gkm');
const fs = require('fs');

const keys = {};

function saveData() {
  fs.writeFile('data.json', JSON.stringify(keys), err => {
    if (err) console.log(err);
    else return;
  })
}

gkm.events.on('key.*', data => {
  const button = data[0];
  let keysButton = keys[button];

  if (keys[button]) keys[button] += 1;
  else keys[button] = 1;

  console.log(keys);
});

setInterval(saveData, 1000);