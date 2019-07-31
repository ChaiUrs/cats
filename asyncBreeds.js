/*
// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    console.log('Callback: I have the data!')
    if (!error) return data; 
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so this function returns undefined.
}

// we try to get the return value
const bombay = breedDetailsFromFile('Bombay');
console.log('Return Value: ', bombay) // => will NOT print out details, instead we will see undefined!
*/

//Fixed the bug
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
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

breedDetailsFromFile('Bombay', bombay => {
  console.log('Return Value: ', bombay); // => print out details here.
});
