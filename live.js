const beers = [
  { id: 7, amount: 50, value: 2.21, volume: 450 },
  { id: 2, amount: 50, value: 4.5, volume: 355 },
  { id: 3, amount: 50, value: 6, volume: 600 },
];

const isBeer = (amount, value, volume) => (amount / value) * volume;

function arrayBeer(array) {
  return array
    .map((item) => ({
      id: item.id,
      volume: isBeer(item.amount, item.value, item.volume),
    }))
    .sort((a, b) => b.volume - a.volume);
}
console.table(arrayBeer(beers));
