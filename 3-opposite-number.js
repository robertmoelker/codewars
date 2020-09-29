const opposite = (number) => (number < 0) ? Math.abs(number) : -Math.abs(number);

console.log(opposite(1), -1)
console.log(opposite(-1), 1)
console.log(opposite(-5), 5)
