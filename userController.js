
const {validationResult} = require('express-validator')

const Dummy_User = [
    {
        id: 'u1',
        name:'sam',
        email:'test@test.com',
        password:'password'
    }
];

const getUsers = (req, res, next)=>{
    res.json({users:Dummy_User})

};
const signup = (req, res, next)=>{

    const error = validationResult(req)
    if(!error.isEmpty()){
     
        res.status(422).json({message:'Invalid Input passed '})
    }

    const {name, email, password} = req.body;

    const createdUser = {
        name,
        email,
        password

    }
    Dummy_User.push(createdUser)
    res.status(201).json({user: createdUser})
};
const login = (req, res, next)=>{

    const{email, password} = req.body;

    const identifiedUser = Dummy_User.find(u => u.email === email)

        if(!identifiedUser || identifiedUser.password != password){
            res.status(404).json({message:'Invalid email or password !'})
        }

        res.json({message:'Logged in!'})

};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login
