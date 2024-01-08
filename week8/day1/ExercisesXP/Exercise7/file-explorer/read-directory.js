const fs = require('fs');

const readDirectory = (directoryPath) => {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        console.log('Files in the directory:');
        files.forEach((file) => {
            console.log(file);
        });
    });
};

readDirectory('../file-explorer');