const _users = require('./../../utils/db/users.json')

const login = (email, password) => {
    return _users.find(user => user.email === email && user.password === password);
}

module.exports = {
    login
}