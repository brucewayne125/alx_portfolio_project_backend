// Buisness logic (for authentication)
const User = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtocken');

exports.register = (req, res) => {
  const {username, email, password} = req.body;

  try{
    const exstinguisher = await user.findone({email});
    if (extinguisher){
      return res.status(400).json({message: 'User Already exists});
    }
    const Password = await bcrypt.hash(password, 10);

    const newuser = new user({
      username,
      email,
      password: Password,
    });
    await newuser.save();
    res.status(201).json({message: 'Registration Successful'});
    }
    catch (error) {
      res.status(500).json({message: 'server error', error});
    }
};

exports.login = async (req, res) => {
  const {email, password} = req.body;

  try{
    const user = await user.findone({email});
    if (!user){
      return res.status(400).json({message: 'Invalid username'});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      return res.status(400).json({message: 'Invalid password'});
      };
    const tocken = jwt.sign({id: user._id}, 'your_jwt_secret', {expiresIn: '2h'});
    
    res.status(200).json({tocken, user:{ id: user._id, username: user.username, email: user.email}});
    }
      catch(error){
      res.status(500).json({message: 'server error', error});
   }
};
exports.logout = (req, res) => {
  res.status(200).json({message: 'user logged out'});
}
