const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" })

const cors = require('cors')
const mongoose = require('mongoose');
const recipe = require('./router/recipe');
const userInfo = require('./router/userInfo')

const { MONGODB_URL } = process.env;

app.use(express.json())
const corsOptions ={
    origin:'*', 
    credentials:true,       
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use('/api/v1', recipe);
app.use('/api/v1', userInfo)

const port = process.env.PORT || 5400;

// app.get('/', (req, res) => {
//     res.send('General Note.')
// });

mongoose.connect(MONGODB_URL, {
    usenewurlparser: true,
    useunifiedtopology: true,
}).then(() => {
    app.listen(port, () => console.log(`conncted to port ${port}`))
}).catch((err) => console.log(err.message))
