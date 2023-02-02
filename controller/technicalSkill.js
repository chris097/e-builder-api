const Skill = require("../model/technicalSkill");

exports.getSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(
            {
                skills,
                status: 200,
                message: "Fetched skills succcessfully",
                created_at: Date.now()
            })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

exports.createSkills = async (req, res) => {
    const { name } = req.body;
    try {
        const skill = new Skill({
            name: name,
            _id: req._id
        });
        if (!skill.name.length) {
            res.status(400).json({message: "Wrong formatting"})
        } else {
            await skill.save();
        }
        console.log(skill)
        res.status(201).json({ message: "Skill created successfully", status: 201, success: true })
    } catch (err) {
        res.json({ message: err.message })
    }
}