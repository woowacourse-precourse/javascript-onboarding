function problem2(cryptogram) {
  const isLowerCase = (string) => /^[a-z]*$/.test(string)
  if(!isLowerCase(cryptogram)) throw Error('문자열이 소문자만으로 이루어지지 않았습니다.')
  if(cryptogram.length<1||cryptogram.length>1000) throw Error('문자열의 길이가 맞지 않습니다.');
}

module.exports = problem2;