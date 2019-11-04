const express = require('express');
const app = express();
const port = 3000;

const randomRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randomResult = () => {
  const amount_PLN = randomRange(10000 * 100, 100000 * 100) / 100;
  const amount_EUR = randomRange(10 * 100, 100 * 100) / 100;
  const amount_GBP = randomRange(10 * 100, 100 * 100) / 100;
  const amount_USD = randomRange(10 * 100, 100 * 100) / 100;
  const EUR = randomRange(3 * 1000, 5 * 1000) / 1000;
  const USD = randomRange(3 * 1000, 5 * 1000) / 1000;
  const GBP = randomRange(3 * 1000, 5 * 1000) / 1000;
  const amount_total_in_PLN =
    Math.round(
      (amount_PLN + amount_EUR * EUR + amount_GBP * GBP + amount_USD * USD) *
        100,
    ) / 100;
  const collectors_in_city = randomRange(1, 20);

  return {
    amount_PLN,
    amount_EUR,
    amount_GBP,
    amount_USD,
    rates: {
      EUR,
      USD,
      GBP,
    },
    amount_total_in_PLN,
    collectors_in_city,
  };
};

app.get('/api', (req, res) => res.json(randomResult()));

app.listen(port, () => console.log(`App listening on port ${port}!`));
