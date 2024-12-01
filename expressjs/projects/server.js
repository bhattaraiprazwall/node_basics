// server.js
const express = require("express");
const jsonMiddleware = require("./middleware/jsonMiddleware");
const namesRoutes = require("./routes/namesRoutes");

const app = express();
const PORT = 5000;

// Middleware for parsing JSON
app.use(jsonMiddleware());

// Names routes
app.use("/api", namesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
