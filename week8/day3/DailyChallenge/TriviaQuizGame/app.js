const express = require('express')
const app = express()

const allRoutes = require('./routes/quiz.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/quiz', allRoutes)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});