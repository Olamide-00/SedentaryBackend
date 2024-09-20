const bcrypt = require("bcrypt");




const HashPassword = (password) => {
    const saltRound = 10;
    const getSalt = bcrypt.genSaltSync(saltRound)
    const newPass = bcrypt.hashSync(password, getSalt)
    return newPass
 }


 module.exports = HashPassword;