const Education = require('../model/education');

exports.getEducation = async (req, res) => {
    try {
        const education = await Education.find();
    res.status(200).json({ data: education, status: 200, message: "successfully" })
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};

exports.createEducation = async (req, res) => {
    const userId = req.user._id;
    const { school_name, degree, program, start_date, end_date } = req.body;
    try {
        const education = new Education({
            userId,
            school_name: school_name,
            degree: degree,
            program: program,
            start_date: start_date,
            end_date: end_date
        })
        await education.save()
        res.status(201).json({message: "education details successfully created", status: 201})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

exports.updateEducation = async (req, res) => {
    try {
        const userId = req.params.id;
        await Education.findOneAndUpdate({ _id: userId }, req.body, { new: true });
            res.status(201).json({ message: "Education Updated Successfully!" });
    } catch (err) {
        res.json({message: err.message})
    }
}