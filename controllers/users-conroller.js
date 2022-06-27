const {v4 :uuid} = require('uuid');
const DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Rotem Librati',
        email: 'test@test.com',
        password: 'test'
    }
]

const getUserById = (req, res, next) => {
    res.json({message: "Its Work"});
};

const getUsers = (req, res, next) => {
    res.json({users: DUMMY_USERS});
}

const signup = (req, res, next) => {
    const { name, email, password } = req.body;
    const createUser = {
        id: uuid(),
        name,
        email,
        password
    }
    DUMMY_USERS.push(createUser);
    
    res.status(201).json({user: createUser});
}

const login = (req, res, next) => {}

exports.getUserById = getUserById;
exports.getUsers = getUsers;
exports.signup= signup;
exports.login = login;
