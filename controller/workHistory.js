const WorkHistory = require('../model/workHistory');

exports.getWorkHistory = async (req, res) => {
    try {
        const workHistory = await WorkHistory.find();
        res.status(200).json({ data: workHistory, status: 200, message: 'successfully' })
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};

exports.createWorkHistory = async (req, res) => {
    const { title, employer, city, state, country, description, start_date, end_date } = req.body;
    try {
        const workHistory = new WorkHistory({
            title: title,
            employer: employer,
            city: city,
            state: state,
            country: country,
            description: description,
            start_date: start_date,
            end_date: end_date
        })
        await workHistory.save()
        res.status(201).json({message: 'work history successfully created.'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}