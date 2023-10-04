const userModel = require("../Model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// User registration
exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone } = req.body;
    const encryptedUserPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: encryptedUserPassword,
      phone: phone,
    });

    const token = jwt.sign(
      {
        user_id: user._id,
        email,
      },
      process.env.key_token,
      {
        expiresIn: "5h",
      }
    );

    user.token = token;
    res.status(200).send(user);
  } catch (error) {
    console.log("error : " + error);
    res.status(400).send(error.message);
  }
};

// Getting the list of all users
exports.getAllUser = async (req, res) => {
  try {
    const allUsers = await userModel.find();
    console.log(allUsers);
    res.status(200).send(allUsers);
  } catch (error) {
    console.log("error" + error);
    res.status(400).send(error.message);
  }
};

// login the user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email, password);
    if (!(email && password)) {
      res.status(400).send({ message: "enter all the inputs" });
    }

    const user = await userModel.findOne({ email });
    // console.log(user);

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          user_id: user._id,
        },
        process.env.key_token,
        {
          expiresIn: "5h",
        }
      );

      user.token = token;
      res.status(200).send(user);
    } else {
      res.status(404).send({ message: "user does't exist" });
    }
  } catch (error) {
    console.log("error", error);
    res.status(400).send(error.message);
  }
};

// get the user with there email
exports.getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    // console.log(email);
    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(200).send(user);
    }

    return res.status(404).send({ message: "user not found" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//delete the user
exports.deleteUser = async(req, res) => {
    try {
        const email = req.params.email;
        const deletedUser = userModel.findOneAndDelete({email});

        if(deletedUser){
            return res.status(200).send({message : "user deleted successfully!"});
        }

        return res.status(404).send({message : "user not found"});
    } catch (error) {
        res.status(400).send({message : "server error"});
    }
}
