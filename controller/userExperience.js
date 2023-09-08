const userExperience = require('../model/userExperience');

exports.getUserExperience = async (req, res) => {
    const userId = req.user._id;
    try {
        const data = await userExperience.find({userId});
        res.status(200).json({ data, status: 200, message: 'successfully' })
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};

exports.createUserExperience = async (req, res) => {
    const userId = req.user._id;
    const {
        job_title,
        company,
        country,
        description,
        start_date,
        end_date
    } = req.body;
    try {
        const user = new userExperience({
            userId,
            job_title: job_title,
            company: company,
            country: country,
            description: description,
            start_date: start_date,
            end_date: end_date
        });
        await user.save()
        res.status(201).json({ message: 'User experience successfully created.', status: 201 })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

exports.updateUserExperience = async (req, res) => {
    try {
        const userId =  req.params.id;
        await userExperience.findOneAndUpdate({_id: userId}, req.body, { new: true });
        res.status(201).json({message: "User Experience Updated Successfully!", status: 201})
    } catch (err) {
        res.json({message: err.message})
    }
};