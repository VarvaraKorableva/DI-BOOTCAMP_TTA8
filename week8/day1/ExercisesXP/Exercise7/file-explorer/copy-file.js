const fs = require('fs');

const copyFile = (source, destination) => {

    fs.readFile(source, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }


        fs.writeFile(destination, data, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log(`Content from ${source} copied to ${destination} successfully.`);
        });
    });
};

copyFile('source.txt', 'destination.txt');