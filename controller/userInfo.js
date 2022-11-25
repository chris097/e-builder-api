const UserInfo = require('../model/userInfo');

exports.getUserInfo = async (req, res) => {
    try {
        const userInfo = await UserInfo.find();
    res.status(200).json({ data: userInfo, status: 200, message: "successfully" })
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};

exports.createUserInfo = async (req, res) => {
    const {
        first_name,
        last_name,
        profession,
        email,
        phone,
        bio,
        street,
        city,
        state,
        country
    } = req.body;
    try {
        const info = new UserInfo({
            first_name: first_name,
            last_name: last_name,
            profession: profession,
            email: email,
            phone: phone,
            bio: bio,
            street: street,
            city: city,
            state: state,
            country: country,
            _id: req._id
        })
        await info.save();
        res.status(201).json({ message: "user information successfully created.", status: 201 })
    } catch (err) {
        res.json({ message: err.message })
    }
};