function countToLevel(level) {
  if (level < 1) return [0];

  const clapsToLevel = [0, 3];
  for (let i = 2; i <= level; i++) {
    clapsToLevel.push(10 * clapsToLevel[i - 1] + 3 * Math.pow(10, i - 1));
  }
  return clapsToLevel;
}

module.exports = countToLevel;
