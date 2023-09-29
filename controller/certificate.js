const Certificate = require("../model/certificate");

exports.getCertificate = async (req, res) => {
    try {
         const userId = req.user._id;
        const certificate = await Certificate.find({userId});
        res.status(200).json(
            {
                certificate,
                status: 200,
                created_at: Date.now()
            }
        )
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

exports.createCertificate = async (req, res) => {
    const userId = req.user._id;
    const { title, title_url } = req.body;
    try {
        const certificate = new Certificate({
            userId,
            title: title,
            title_url: title_url
        })
        await certificate.save();
        res.status(201).json({
            message: "certificate created successfully",
            status: 201
        })
    } catch (err) {
        res.json({ message: err.message })
    }
};

exports.updateCertificate = async (req, res) => {
    try {
        const userId = req.params.id;
        await Certificate.findOneAndUpdate({ _id: userId }, req.body, { new: true });
            res.status(201).json({ message: "Certificate Updated Successfully!" });
    } catch (err) {
        res.json({message: err.message})
    }
}