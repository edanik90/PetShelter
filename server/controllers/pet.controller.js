const { Pet } = require('../models/Pet.model');

module.exports = {
    getAll: (req, res) => {
        Pet.find()
            .then(response => res.json(response))
            .catch(err => res.status(400).json(err))
    },
    getOne: (req, res) => {
        Pet.findById(req.params.id)
            .then(response => res.json(response))
            .catch(err => res.status(400).json(err))
    },
    create: (req, res) => {
        Pet.create(req.body)
            .then(response => res.json(response))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {runValidators: true, context: 'query'})
            .then(response => res.json(response))
            .catch(err => res.status(400).json(err))
    },
    destroy: (req, res) => {
        Pet.deleteOne({ _id: req.params.id })
            .then(response => res.json(response))
            .catch(err => res.status(400).json(err))
    }

}