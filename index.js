const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" })

const cors = require('cors')
const mongoose = require('mongoose');
const userInfo = require('./router/userInfo');
const education = require('./router/education');
const workHistory = require('./router/workHistory');

const { MONGODB_URL } = process.env;

app.use(express.json())
const corsOptions ={
    origin:'*', 
    credentials:true,       
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use('/api/v1', userInfo);
app.use('/api/v1', education);
app.use('/api/v1', workHistory);

const port = process.env.PORT || 5400;

mongoose.connect(MONGODB_URL, {
    usenewurlparser: true,
    useunifiedtopology: true,
}).then(() => {
    app.listen(port, () => console.log(`conncted to port ${port}`))
}).catch((err) => console.log(err.message))
