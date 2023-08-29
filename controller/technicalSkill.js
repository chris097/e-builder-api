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
    const userId = req.user._id;
    const { name } = req.body;
    try {
        const skill = new Skill({
            userId,
            name: name
        });
        await skill.save();
        res.status(201).json({ message: "Skill created successfully", status: 201, success: true })
    } catch (err) {
        res.json({ message: err.message })
    };
};

exports.updateSkills = async (req, res) => {
    try {
        const userId = req.params.id;
        await Skill.findOneAndUpdate({ _id: userId }, req.body, { new: true });
            res.status(201).json({ message: "Skills Updated Successfully!" });
    } catch (err) {
        res.json({message: err.message})
    }
}