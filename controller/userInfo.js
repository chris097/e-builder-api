const UserInfo = require('../model/userInfo');

exports.getUserInfo = async (req, res) => {
    try {
        const userInfo = await UserInfo.find();
        res.status(200).json({
            data: { user: userInfo ,},
            status: 200,
            message: "success"
        })
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};

exports.createUserInfo = async (req, res) => {
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
        res.status(201).json({message: "User Information Updated Successfully!"})
    } catch (err) {
        res.json({message: err.message})
    }
};