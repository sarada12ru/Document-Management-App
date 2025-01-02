const { errorResponse, successResponse } = require('./../../utils/handler/response.handler')
const authService = require('./auth.service');

const login = (req, res) => {
    try {
        const { email, password } = req.body;
        const user = authService.login(email, password);
        if(!user) {
            return res.status(401).json(successResponse("Invalid Credentials !", user));
        }
        return res.status(200).json(successResponse("User Authenticated !", user));
    }
    catch(err) {
        return res.status(500).json(errorResponse("Failed to Authenticate !", {err}));
    }
}

module.exports = {
    login
}