function isException(pages) {
  if (isNaN(pages[0]) || isNaN(pages[1])) return true;
  else if (pages[0] <= 1 || pages[0] >= 400 || pages[1] <= 1 || pages[1] >= 400)
    return true;
  else if (pages[0] % 2 === 0 || pages[1] % 2 !== 0) return true;
  else if (pages[0] + 1 !== pages[1]) return true;
  else return false;
}

module.exports = isException;
