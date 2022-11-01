const decryption = (crypto) => {
  let regex = /(.)\1+/g;

  if (!regex.test(crypto)) return false;

  let decrypto = crypto.replace(regex, "");

  return decrypto;
};

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
