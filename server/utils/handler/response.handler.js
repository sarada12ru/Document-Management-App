const errorResponse = (message, info) => {
    return {
        success: false,
        message,
        info
    }
}

const successResponse = (message, data) => {
    return {
        success: true,
        message,
        data
    }
}

module.exports = {
    errorResponse,
    successResponse
}