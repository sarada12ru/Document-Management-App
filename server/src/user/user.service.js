const _users = require('./../../utils/db/users.json')

const users = () => {
    return _users;
}

const userDetails = (id) => {
    return _users.find(el => el.id === id);
}

module.exports = {
    users
}