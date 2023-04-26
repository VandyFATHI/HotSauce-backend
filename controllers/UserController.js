const User = require('../models/user');

exports.CreateUser = (req, res, next) => {
    delete req.body._id;
    const newUser = new User({ ...req.body })
    newUser.save()
        .then(res.status(201).json({ message: "Utilisateur a ete cree !" }))
        .catch(error => res.status(400).json({ error }))
};

exports.Login = (req, res, next) => {

};