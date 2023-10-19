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

        if (userInfo.length === 1 && certificate.length === 0 && education.length === 0 && userExperience.length === 0 && skills.length === 0) {
             return res.status(200).json({ isCreated: true, percentage: "20", status: 200, message: "Successful" });
        }else if (userInfo.length === 1 && certificate.length === 0 && education.length === 0 && (userExperience.length === 1 || userExperience.length === 2) && skills.length === 0) {
             return res.status(200).json({ isCreated: true, percentage: "40", status: 200, message: "Successful" });
        }else if (userInfo.length === 1 && certificate.length === 0 && education.length === 0 && (userExperience.length === 1 || userExperience.length === 2) && skills.length === 1) {
             return res.status(200).json({ isCreated: true, percentage: "60", status: 200, message: "Successful" });
        }else if (userInfo.length === 1 && certificate.length === 0 && education.length === 1 && (userExperience.length === 1 || userExperience.length === 2) && skills.length === 1) {
             return res.status(200).json({ isCreated: true, percentage: "80", status: 200, message: "Successful" });
        }else if (userInfo.length === 1 && certificate.length === 1 && education.length === 1 && (userExperience.length === 1 || userExperience.length === 2) && skills.length === 1) {
             return res.status(200).json({ isCreated: true, percentage: "100",  status: 200, message: "Successful" });
        } else res.status(404).json({
             isCreated: false,
             percentage: "0",
             status: 404,
             message: "Not successful"
        });
       
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};

exports.getPercentage = async (req, res) => {
     try {
          const userId = req.user._id;
          const userInfo = await UserInfo.find({ userId });
          const certificate = await Certificate.find({ userId });
          const education = await Education.find({ userId });
          const userExperience = await UserExperience.find({ userId });
          const skills = await TechnicalSkill.find({ userId });

          return res.status(200).json({
               isUserInfo: (userInfo.length === 1 )&& "20",
               isUserExp: (userExperience.length === 1 || userExperience.length === 2 )&& "40",
               isSkills: (skills.length === 1) && "60",
               isEducation: (education.length === 1) && "80",
               isCertificate: (certificate.length === 1) && "100",
          });

     } catch (err) {
          res.status(500).json({ message: err.message });
     };
};

