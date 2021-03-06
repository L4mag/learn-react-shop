const {Router} = require('express');
const User = require('../models/User');
const router = Router();
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Incorrect email').normalizeEmail().isEmail(),
    check('password', 'Password must contain at least 6 symbols')
      .isLength({min: 6})
  ],
  async (req, res) => {
  try{
    console.log(`BODY: ${req.body}`);
    const errors = validationResult(req);

    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array(),
        massage: 'Incorrect registration data'
      });
    }

    const {email, password, isAdmin} = req.body;

    const candidate = await User.findOne({email});

    if(candidate){
      return res.status(400).json({message: 'This user already exists'});
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({email, password: hashedPassword, isAdmin});

    await user.save();

    res.status(201).json({message: 'User successfully created'});
  } catch (e) {
    res.status(500).json({message: 'Registration error, try again'});
  }
});

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Incorrect email').normalizeEmail().isEmail(),
    check('password', 'Enter password').exists()
  ],
  async (req, res) => {
    try{
      const errors = validationResult(req);

      if(!errors.isEmpty()){
        return res.status(400).json({
          errors: errors.array(),
          massage: 'Incorrect login data'
        });
      }

      const {email, password} = req.body;

      const user = await User.findOne({email});

      if(!user){
        return res.status(400).json({message: 'This user doesn\'t exist'});
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if(!isMatch){
        return res.status(400).json({message: 'Wrong password'});
      }

      const token = jwt.sign(
        {userId: user.id, isAdmin: user.isAdmin},
        config.get('jwtSecret'),
        { expiresIn: '1h'}
      )

      res.json({token, userId: user.id, isAdmin: user.isAdmin});

    } catch (e) {
      res.status(500).json({message: 'Login error, try again'});
    }
  });


module.exports = router;