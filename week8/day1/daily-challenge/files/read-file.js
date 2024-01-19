const fs = require('fs');
const path = require('path');

function readFileContent() {
  const filePath = path.join(__dirname, 'file-data.txt');

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject('Error reading the file: ' + err.message);
      } else {
        resolve(data);
      }
    });
  });
}

async function main() {
  try {
    const content = await readFileContent();
    console.log(content);
  } catch (error) {
    console.error(error);
  }
}

main();

module.exports = main;