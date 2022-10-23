const UserInfo = require('../model/userInfo');

exports.getUserInfo = async (req, res) => {
    const userInfo = await UserInfo.find();
    res.status(200).json({data: userInfo, status: 200})
}


exports.createUserInfo = async (req, res) => {
    const { firstName, lastName, profession, email, phone, city, state, country } = req.body;
    try {
        const info = new UserInfo({
            firstName: firstName,
            lastName: lastName,
            profession: profession,
            email: email,
            phone: phone,
            city: city,
            state: state,
            country: country,
            _id: req._id
        })
        await info.save();
        res.status(201).json({message: "user information is successfully created."})
    } catch (err) {
        res.json({message: err.message})
    }
}