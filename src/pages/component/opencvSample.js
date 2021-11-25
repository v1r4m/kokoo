const Jimp = require('jimp');
cv = require('opencv.js');

async function onRuntimeInitialized(){
    console.log(cv.getBuildInformation())
}
// Finally, load the open.js as before. The function `onRuntimeInitialized` contains our program.
Module = {
  onRuntimeInitialized
};


export default onRuntimeInitialized;