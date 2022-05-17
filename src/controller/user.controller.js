const User = require('../model/user.model');

const addUser = async (req, res) => {
     if (req.body) {
        const user = new User(req.body);
        user.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllUsers = async (req, res) => {
    await User.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getUser = async (req, res) => {
    if (req.params && req.params.id) {
        await User.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const deleteUser = async (req, res) => {
    if (req.params && req.params.id) {
        await User.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.status(200).send("User deleted successfully")
            }).catch((err) => {
                res.status(500).send({ error: err.message })
            });
    }
}

const updateUser = async (req, res) => {
    if (req.params && req.params.id) {
        await User.updateOne({ _id: req.params.id }, { name: req.body.name, email: req.body.email, phoneNumber: req.body.phoneNumber, password: req.body.password })
            .then((result) => {
                res.status(200).send({ data: result });
            }).catch((err) => {
                res.status(500).send({ error: err.message });
            });
    }
}

const userValidation = async (req, res) => {
    if (req.body) {
       await User.find({ email: req.body.email, password: req.body.password})
           .then(data => {
               console.log(req.body)
                if(data.length!=0){
                   res.status(200).send("TRUE")
               } else {
                   res.status(200).send("FALSE")
               }
           })
           .catch(error => {
               res.status(500).send({ error: error.message });
           });
   }
}

module.exports = {
    addUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser,
    userValidation
}