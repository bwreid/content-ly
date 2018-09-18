/*
  Write a function that reads in the CSV in data/log.csv and returns an object organized by emotion. For example:

  {
    Anxious: [
      'a40e34e6-36f5-4d06-afa1-d9e0e1805908',
      '31020f8f-82f4-4542-810b-59803a03b387,
      ...
    ]
  }

  You'll want to use the Papa Parse library to read in the `.csv` file.
*/
function groupByEmotion (filePath) {
  console.log(filePath)
}

const path = require('path')
const log = path.join(__dirname, '..', 'data', 'log.csv')

groupByEmotion(log)