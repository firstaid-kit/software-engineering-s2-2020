const router = require('express').Router();
let User = require('../schemas/user_schema');

// handles HTTP get requests to get all users from DB
// find method returns a promise (in jSON format)
router.route('/').get((req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:login_1').get((req, res) => {
  User.findOne()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
})

// handles HTTP post requests, allows saving of users with save method
router.route('/register').post((req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  const name = req.body.name;
  const email = req.body.email;
  const affiliation = req.body.affiliation;
  const role = req.body.role;
  const gender = req.body.gender;
  const age = Number(req.body.age);

  const newUser = new User({
    login, 
    password, 
    name, 
    email, 
    affiliation, 
    role, 
    gender, 
    age});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;