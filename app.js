const express = require('express');
const connectDB = require('./config/db');
const books = require('./routes/api/books');
var cors = require('cors');

const port = 5656 || process.env.PORT;
const app = express();

connectDB();

app.use(cors({origin: true, credentials: true}));
app.use(express.json({ extended: false }));
// app.get('/', (req,res) =>{
//     res.send("hmm");
// })

app.use('/api/books',books);
app.listen(port, () => {
    console.log('Server running on port ' +port)
});