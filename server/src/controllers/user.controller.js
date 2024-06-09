const { v4 } = require('uuid');
const UserModel = require('../models/user.model');

const usersController = {};

usersController.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.send('Error get');
  }
};

usersController.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    return res.status(200).send(user);
  } catch (err) {
    return res.send('Error get');
  }
};

usersController.createUser = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).send({ error: 'bad request' + error });

  try {
    // Comprobamos si ya existe el usuario
    const user = await UserModel.findOne({ email });
    if (user) return res.status(409).send({ error: 'User exists' });

    const newUser = new UserModel({ _id: v4(), name, email });
    // Ahora hay que guardarlo en la BBDD
    await newUser.save();

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (error) {
    return res.status(500).send('Error post');
  }
};

usersController.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) return res.status(409).send({ error: 'User not exists' });

    await UserModel.updateOne({ _id: id }, { $set: { ...req.body } });
    // $set es para asignar. Le asignamos los datos que hemos recibido, si hay campos iguales, se sustituyen.

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (error) {
    return res.send('Error patch');
  }
};

usersController.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) return res.status(409).send({ error: 'User not exists' });

    await UserModel.deleteOne({ _id: id });

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (error) {
    return res.send('Error delete');
  }
};

module.exports = usersController;
