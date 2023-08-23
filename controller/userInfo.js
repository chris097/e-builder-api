const UserInfo = require('../model/userInfo');

exports.getUserInfo = async (req, res) => {
    try {
        const userId = req.user._id;
        const data = await UserInfo.find({userId});
        res.status(200).json({data, status: 200, message: "success" })
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};

exports.createUserInfo = async (req, res) => {
    const userId = req.user._id;
    const {
        fullname,
        email,
        phone,
        portfolio,
        address,
        bio
    } = req.body;
    try {
        const info = new UserInfo({
            userId,
            fullname: fullname,
            email: email,
            phone: phone,
            portfolio: portfolio,
            address: address,
            bio: bio
        })
        await info.save();
        res.status(201).json({ message: "User Information Created Successfully.", status: 201 })
    } catch (err) {
        res.json({ message: err.message })
    }
};

exports.updateUserInfo = async (req, res) => {
    try {
        const userId =  req.params.id;
        await UserInfo.findOneAndUpdate({_id: userId}, req.body, { new: true });
        res.status(201).json({message: "User Information Updated Successfully!", status: 201})
    } catch (err) {
        res.json({message: err.message})
    }
};