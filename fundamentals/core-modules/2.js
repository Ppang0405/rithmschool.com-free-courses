/*



For this exercise, we are going to build a simple command line tool which allows us to make a request to an API and store the data in a text file! We will be using the following modules:

fs - for reading and writing to a file
process - for gathering arguments from the command line
request - for making API requests (this is an external module)

This application should accept a command line argument using process.argv. The command line argument should be a search term and your application should make an API request to the dad joke API to search for a joke based on the search term. If it finds jokes matching the term, it should output a random joke, and should also save the joke to a file called jokes.txt. If it doesn't find a joke, it should log a message to the console telling the user that no jokes were found for that search term.
Bonus

    Use the prompt module to ask a user for some input instead of having to pass in an argument from the command line.
    Your program should accept a command line argument called leaderboard. If that command line argument is passed in, your application should return the most popular joke based on how many times it appears in jokes.txt



 */

'use strict';

const https = require('https');
const fs = require('fs')

const baseUrl = `https://icanhazdadjoke.com/search?term=${process.argv[2]}`

/**
 *
 * response structure for search term
 {
  "current_page": 1,
  "limit": 20,
  "next_page": 1,
  "previous_page": 1,
  "results": [
    {
      "id": "GlGBIY0wAAd",
      "joke": "How much does a hipster weigh? An instagram."
    },
    {
      "id": "xc21Lmbxcib",
      "joke": "How did the hipster burn the roof of his mouth? He ate the pizza before it was cool."
    }
  ],
  "search_term": "hipster",
  "status": 200,
  "total_jokes": 2,
  "total_pages": 1
}
 */


https.get(baseUrl, (resp) => {

    console.log('Loading')

  let data = ''

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk
  })

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log('JSON_DATA: ' + JSON.parse(data))

    fs.writeFile('jokes.txt', 'Hello World', (err, data) => {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    })
  })

}).on("error", (err) => {
  console.log("Error: " + err.message + "\n No jokes found")
})
