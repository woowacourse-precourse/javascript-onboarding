function countAll(number, clapsToLevel) {
  if (number === 0) return 0;

  const level = number.toString().length;
  const frontDigit = Math.floor(number / Math.pow(10, level - 1));
  const nextNumber = number % Math.pow(10, level - 1);
  const clapDigits = [3, 6, 9];

  let count = clapsToLevel[level - 1];
  for (let i = 1; i < frontDigit; i++) {
    count += clapsToLevel[level - 1];
    if (clapDigits.includes(i)) count += Math.pow(10, level - 1);
  }
  if (clapDigits.includes(frontDigit)) count += nextNumber + 1;
  count += countAll(nextNumber, clapsToLevel);

  return count;
}

module.exports = countAll;
