/*Inside fileManager.js, define a module that exports functions 
for reading and writing files.
Export functions named readFile and writeFile.
Implement the readFile function to read the content of a specified 
file using the fs module.
Implement the writeFile function to write content to a specified file 
using the fs module.*/

const fs = require('fs').promises
const path = require('path')

const readFile = async(filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf-8')
        console.log(data) 
    } catch (error) {
        console.error('Error reading the file:', error);
    }

}

const writeFile = async (filePath, data) => {
    try {
        await fs.writeFile(filePath, data, 'utf-8');
        console.log('Data has been written to the file.');
    } catch (error) {
        console.error('Error writing to the file:', error);
    }
};

module.exports = {readFile, writeFile};