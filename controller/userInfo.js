const UserInfo = require('../model/userInfo');
const Skill = require('../model/technicalSkill');
const History = require('../model/workHistory');
const Education = require('../model/education');
const Certificate = require('../model/certificate');

exports.getUserInfo = async (req, res) => {
    try {
        const userInfo = await UserInfo.find();
        const history = await History.find();
        const skill = await Skill.find();
        const education = await Education.find();
        const certificate = await Certificate.find();
        res.status(200).json({
            data: {
                user: userInfo ,
            history: history ,
            skill: skill,
            education: education,
            certificate: certificate
            },
            status: 200,
            message: "successfully"
        })
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
        country,
        linkedin,
        twitter,
        website
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
            linkedin: linkedin,
            twitter: twitter,
            website: website,
            _id: req._id
        })
        await info.save();
        res.status(201).json({ message: "user information successfully created.", status: 201 })
    } catch (err) {
        res.json({ message: err.message })
    }
};

exports.updateUserInfo = async (req, res) => {
    // update user info here
}