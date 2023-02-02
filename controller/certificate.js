const Certificate = require("../model/certificate");

exports.getCertificate = async (req, res) => {
    try {
        const certificate = await Certificate.find();
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
    const { cert } = req.body;
    try {
        const certificate = new Certificate({
            cert: cert,
            _id: req._id
        })
        if (!certificate.cert.length) {
            res.status(400).json({message: "Wrong format"})
        } else {
            await certificate.save();
        };
        res.status(201).json({
            message: "certificate created successfully",
            status: 201
        })
    } catch (err) {
        res.json({message: err.message})
    }
}