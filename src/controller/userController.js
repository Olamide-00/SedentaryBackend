const Joi = require("joi");
const User = require("../models/user");





// user validation schema

const Uservalidation = Joi.object({
    name: Joi.string().min(3).max(30),
    email: Joi.string().email(),
    password: Joi.string().min(3).max(30)
})




// signUp controller

exports.SignUp = async (req, res) => {

    const { error } = Uservalidation.validate(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message)
    }
    
    
    const { name, email, password } = req.body;

    try {
        // checking for existing user
        const existingUser = await User.findOne({ email })

        if(existingUser) {
            return res.status(400).send("This email is used in another account")
        }

        const newUser = new User({ name, email, password });

        const savedUser = await newUser.save()
        res.status(201).send("Account created succesfully")
    } catch (error) {
        res.status(500).send(error.details[0].message)
    }
};


exports.Login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // checking for valid user
        const newUser = await User.findOne({ email });
        if(!newUser) {
            return res.status(400).send("User does'nt exist")
        }
        if(newUser.password !== password) {
            return res.status(400).send("Password does'nt match")
        }
        res.status(200).send("Successful")
    } catch (error) {
        res.status(500).send("Error occured")
    }
}


exports.UserDetails = async (req, res) => {

    const { name } =req.params

    try {
        // checking for valid user
        const validUser = await User.findOne({ name })
        if(!validUser) {
            return res.status(400).send("invalid params")
        }

        // if valid user
        res.status(200).json({
            name: validUser.name,
            email: validUser.email
        })

    } catch (error) {
        res.status(500).send("Error")
    }
}