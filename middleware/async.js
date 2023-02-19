const errorHandlerMiddleware = require("./error-handler");

const asyncWrapper = (callback) => {
    return async (req, res, next) => {
        try {
            await callback(req, res, next);
        } catch (error) {
            next(errorHandlerMiddleware);
        }
    }
};

module.exports = asyncWrapper;