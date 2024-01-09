const express = require('express');
const app = express();

const data = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🥐', name: 'Croissant' },
    { emoji: '🥪', name: 'Sandwich' },
    { emoji: '🍒', name: 'Cherries' },
    { emoji: '🍬', name: 'Candy' },
    { emoji: '🍭', name: 'Lollipop' },
    { emoji: '🥨', name: 'Pretzel' },
    { emoji: '🥦', name: 'Broccaly' },
    { emoji: '🍩', name: 'Donnat' },
    { emoji: '🍏', name: 'Apple' },
];

app.use(express.static('public'));

app.get('/api/data', (req, res) => {
    //res.json(data);
    res.send(data)
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

