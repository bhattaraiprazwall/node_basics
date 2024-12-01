// controller/namesController.js
const { readData, writeData } = require("../utilities/fileHelper");
const { successResponse, errorResponse }=require("../utilities/responseHelper");

// POST - Add a new name
function addName(req, res) {
    const { name } = req.body;

    if (!name) {
        return errorResponse(res,"Name is required",400)
    }

    const data = readData();
    const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    const newEntry = { name, id };
    data.push(newEntry);
    writeData(data);
    successReponse(res,newEntry,201);
}

// PATCH - Update a name by ID
function updateName(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        return errorResponse(res,"Name is required",400);
    }

    const data = readData();
    const entryIndex = data.findIndex(entry => entry.id === parseInt(id));

    if (entryIndex !== -1) {
        data[entryIndex].name = name;
        writeData(data);
        res.json(data[entryIndex]);
    } else {
        errorResponse(res,"Entry not found",400);
    }
}

// DELETE - Remove a name by ID
function deleteName(req, res) {
    const { id } = req.params;

    const data = readData();
    const filteredData = data.filter(entry => entry.id !== parseInt(id));

    if (data.length !== filteredData.length) {
        writeData(filteredData);
        res.status(204).end();
    } else {
        errorResponse(res, "Entry not found", 404);
    }
}

// GET - Retrieve all names or search by name
function getAllNames(req, res) {
    const { name } = req.query;
    const data = readData();

    if (name) {
        const filteredData = data.filter(entry => entry.name.toLowerCase().includes(name.toLowerCase()));
        return successResponse(res, filteredData);
    }
    successResponse(res, data);
}

// GET - Retrieve a name by ID
function getNameById(req, res) {
    const { id } = req.params;
    const data = readData();
    const entry = data.find(item => item.id === parseInt(id));

    if (entry) {
        successResponse(res, entry);
    } else {
        errorResponse(res, "Name not found", 404);
    }
}

module.exports = { addName, updateName, deleteName, getAllNames, getNameById };
