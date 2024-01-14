const {db} = require('../config/db')

const _getAllUsers = () => {
    return db('users').select('*').orderBy('name')
}

module.exports = {
    _getAllUsers
}