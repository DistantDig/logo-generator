const generateShapes = require('./generateShapes');

// Function to generate svg file for logo
function generateSVG(data) {
    const svg = 
    `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 ${generateShapes.generateShapes(data.shape, data.backgroundColor)}

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text}">${data.textColor}</text>

</svg>`;
    return svg;
  }
  
  
  module.exports = {generateSVG};