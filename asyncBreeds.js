
const fs = require('fs');

const breedDetailsFromFile = (breed, callback) => {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log('Callback: I have the data!');
    if (!error) {
      callback(data);
    } else {
      callback(undefined);
    }
  });
};

module.exports = breedDetailsFromFile;
