const Certificate = require("../model/certificate");
const Education = require("../model/education");
const TechnicalSkill = require("../model/technicalSkill");
const UserExperience = require("../model/userExperience");
const UserInfo = require("../model/userInfo");

exports.getAllInfo = async (req, res) => {
    try {
        const userId = req.user._id;
        const userInfo = await UserInfo.find({ userId });
        const certificate = await Certificate.find({ userId });
        const education = await Education.find({userId});
        const userExperience = await UserExperience.find({ userId });
        const skills = await TechnicalSkill.find({ userId });

        if (
            userInfo?.length !== 0 ||
            certificate?.length !== 0 ||
            education?.length !== 0 ||
            userExperience?.length !== 0 ||
            skills?.length !== 0)
        {
             return res.status(200).json({ isCreated: true, status: 200, message: "Successfully" });
        } else {
             res.status(404).json({ isCreated: false, status: 404, message: "Not successfully" });
        }
       
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};