function problem4(word) {
  const alphabets = [];
  
  for (let i = 65; i <= 90; i++) alphabets.push(String.fromCharCode(i));
  
  return [...word].map(char => {
    if (char === ' ') return char;
    const reversed = [...alphabets].reverse()[alphabets.indexOf(char.toUpperCase())];
    return char.toUpperCase() === char ? reversed : reversed.toLowerCase();
  }).join('');
}

module.exports = problem4;
