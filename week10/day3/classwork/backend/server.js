const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
const {router} = require('./routes/hello.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/hello', router)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});