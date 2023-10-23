const generateShapes = require('./generateShapes');

function renderText(text, textColor) {
    if (text.length > 3) {
        const cutLength = 3 - text.length;
        text = text.slice(0, cutLength);
    }
    return `<text x="145" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
}

// Function to generate svg file for logo
function generateSVG(data) {
    const svg = 
    `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 ${generateShapes.renderShapes(data.shape, data.backgroundColor)}

 ${renderText(data.text, data.textColor)}

</svg>`;
    return svg;
}
  
module.exports = {generateSVG};