const express = require('express')
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
var cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes');
const jobTypeRoutes = require('./routes/jobsTypeRoutes');
const jobsRoutes = require('./routes/jobsRoutes')
// const jobsRoutes = require('./routes/jobsRoutes');


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
     useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('db connect')).catch((err) => {console.log(err)});


app.use(morgan('dev'));
app.use(bodyParser.json({limit:"5mb"}));
app.use(bodyParser.urlencoded({
    limit:"5mb",
    extended:true
}));
app.use(cookieParser());
app.use(cors());


// routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', jobTypeRoutes);
app.use('/api',jobsRoutes)






//err middleware

app.use(errorHandler);




const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server run ${port}`)
});