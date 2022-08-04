const express = require('express');

const app = express();

// serve static HTML file
app.use('/', express.static('public'));

// for parsing form data (req.body)
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h1>Hello, My Server!</h1>');
});

app.get('/getData', (req, res) => {
  // const number = req.query.number;
  const { number } = req.query;
  if (number) {
    if (!isNaN(+number)) {
      let total = 0;
      for (let i = 1; i <= +number; i++) {
        total += i;
      }
      res.send(`<h1>The Result is ${total}.</h1>`);
    } else {
      res.send('<h1>Wrong Parameter.</h1>');
    }
  } else {
    res.send('<h1>Lack of Parameter.</h1>');
  }
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
