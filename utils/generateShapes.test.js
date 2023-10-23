// File to be tested
const generateShapes = require('./generateShapes');

test('renders circle', () => {
    expect(generateShapes.renderShapes('Circle', '#FFBB99')).toBe(`<circle cx="150" cy="100" r="80" fill="#FFBB99" />`);
});

test('renders triangle', () => {
    expect(generateShapes.renderShapes('Triangle', '#FFBB99')).toBe(`<polygon points="150, 0 25, 200 275, 200" fill="#FFBB99"/>`);
});

test('renders square', () => {
    expect(generateShapes.renderShapes('Square', '#FFBB99')).toBe(`<rect x="50" width="200" height="200" fill="#FFBB99" />`);
});