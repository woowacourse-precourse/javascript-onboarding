function getKeywords(word) {
  const keywords = [];
  for (let i = 1; i < word.length; i++) {
    keywords.push(word[i - 1] + word[i]);
  }
  return [...new Set(keywords)];
}

module.exports = getKeywords;
