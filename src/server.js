import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Received a GET HTTP method'));

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
