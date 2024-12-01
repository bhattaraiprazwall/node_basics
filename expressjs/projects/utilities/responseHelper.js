// utilities/responseHelper.js

function successResponse(res, data, statusCode = 200) {
    res.status(statusCode).json({ success: true, data });
}

function errorResponse(res, message, statusCode = 400) {
    res.status(statusCode).json({ success: false, message });
}

module.exports = { successResponse, errorResponse };