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
    const { school_name, school_location, degree, field, start_date, end_date } = req.body;
    try {
        const education = new Education({
            school_name: school_name,
            school_location: school_location,
            degree: degree,
            field: field,
            start_date: start_date,
            end_date: end_date
        })
        await education.save()
        res.status(201).json({message: "education details successfully created", status: 201})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}