const userService = require('./user.service');
const { errorResponse, successResponse } = require('./../../utils/handler/response.handler')

const getUsers = (req, res) => {
    try {
        const users = userService.users();
        return res.status(200).json(successResponse("Users Fetched Successfully !", users));
    }
    catch(err) {
        return res.status(500).json(errorResponse("Failed to Fetch Users !", err));
    }
}

module.exports = {
    getUsers
}