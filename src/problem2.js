function problem2(cryptogram) {
  var answer;
  answer = decodePassword(cryptogram)
  return answer;
}

function decodePassword(password){
  let decoded = password.split('');
  for (let i = 1; i < decoded.length + 1; i++){
    if (decoded[i-1] === decoded[i]){
      decoded.splice(i-1,2);
      i = 0;
    }
  }
  decoded = decoded.join('');

  if(decoded === []){
    decoded = ""
  }

  return decoded;
}

module.exports = problem2;
