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
const fs = require('fs')
const Papa = require('papaparse')
function groupByEmotion (filePath) {
  const csv = fs.readFileSync(filePath, 'utf-8')
  const { data } = Papa.parse(csv, { header: true })
  
  return data.reduce((acc, row) => {
    const id = row['User Id']
    const emotion = row.Emotion
    return {
      ...acc,
      [emotion]: acc[emotion] ? acc[emotion].concat(id) : [ id ]
    }
  }, {})
}

const path = require('path')
const log = path.join(__dirname, '..', 'data', 'log.csv')

const result = groupByEmotion(log)
console.log(result)