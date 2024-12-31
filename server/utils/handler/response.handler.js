const errorResponse = (message, info) => {
    return {
        message,
        info
    }
}

const successResponse = (message, data) => {
    return {
        message,
        data
    }
}

module.exports = {
    errorResponse,
    successResponse
}