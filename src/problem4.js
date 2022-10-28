function problem4(word) {
  const UPPERCASE = 155;
  const LOWERCASE = 219;
  if( word.toUpperCase() === word ) return String.fromCharCode(UPPERCASE - word.charCodeAt());
  if( word.toLowerCase() === word ) return String.fromCharCode(LOWERCASE - word.charCodeAt());
}

console.log(problem4('A'))
console.log(problem4('a'))

// module.exports = problem4;

