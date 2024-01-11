const express = require('express');
const app = express();
const allRoutes = require('./routes/index');
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', allRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
