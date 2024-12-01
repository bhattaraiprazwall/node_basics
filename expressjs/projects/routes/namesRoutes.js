const express = require("express");
const {
    addName,
    updateName,
    deleteName,
    getAllNames,
    getNameById,
} = require("../controller/namesController");

const router = express.Router();

// POST - Add a new name
router.post("/names", addName);

// PATCH - Update a name by ID
router.patch("/names/:id", updateName);

// DELETE - Remove a name by ID
router.delete("/names/:id", deleteName);

// GET - Retrieve all names or search by name
router.get("/names", getAllNames);

// GET - Retrieve a name by ID
router.get("/names/:id", getNameById);

module.exports = router;
