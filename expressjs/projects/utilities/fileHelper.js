// utilities/fileHelper.js
const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../data/data.json");

// Read data from file
function readData() {
    if (!fs.existsSync(dataFilePath)) {
        return [];
    }
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
}

// Write data to file
function writeData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

module.exports = { readData, writeData };
