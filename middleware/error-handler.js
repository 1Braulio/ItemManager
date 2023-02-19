const {CustomAPIError} = require('../errors/custom-error');

const errorHandlerMiddleware = (error, req, res, next) => {
    console.log(error);
    if (error instanceof CustomAPIError) {
        return res.status(error.statusCode).json({msg: error.message});
    }
    return res.status(500).json({msg: "something went wrong"});
}

module.exports = errorHandlerMiddleware;

