const Sauce = require("../models/sauce");

exports.Get = ('/', (req, res, next) => {
    Sauce.find()
        .then(Sauces => res.status(200).json(Sauces))
        .catch(error => res.status(400).json({ error }))
});

exports.GetById = ('/:id', (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => { res.status(200).json(sauce) })
        .catch(error => res.status(400).json({ error }))
});

exports.Create = ('/', (req, res, next) => {
    delete req.body._id;
    const newSauce = new Sauce({ ...req.body });
    Sauce.save(newSauce)
        .then(() => res.status(201).json({ message: "La sauce a ete cree !" }))
        .catch(error => res.status(400).json({ error }))
});


exports.Update = ('/:id', (req, res, next) => {

});

exports.Delete = ('/:id', (req, res, next) => {
    Sauce.DeleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Sauce supprimee" }))
        .catch(error => res.status(400).json({ error }))
});

exports.Like = ('/:id/like', (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => {
            if (req.body.like == 1) {
                if (sauce.usersLiked.includes(req.body.userId)) {
                    res.status(200).json({ message: "post deja like" });

                } else if (sauce.usersDisliked.includes(req.body.userId)) {
                    const updatedSauce = new Sauce({
                        _id: req.params.id,
                        name: sauce.name,
                        manufacturer: sauce.manufacturer,
                        description: sauce.description,
                        mainPepper: sauce.mainPepper,
                        imageUrl: sauce.imageUrl,
                        heat: sauce.heat,
                        likes: Number(sauce.likes) + Number(1),
                        dislikes: Number(sauce.dislikes) - Number(1),
                        usersLiked: sauce.usersLiked.push(req.body.userId),
                        usersDisliked: sauce.users.Disliked.remove(userId)
                    });
                    Sauce.updateOne({ _id: req.params.id }, updatedSauce)
                        .then(() => res.status(200).json({ message: "Post Like" }))
                        .catch(error => res.status(400).json({ error }))
                }
            }
        })
});

