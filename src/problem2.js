function problem2(cryptogram) {
  let answer;

  const cryptogramArray = cryptogram.split("");
  let decryption = cryptogramArray.reduce((arr, char) => {
    arr[arr.length - 1] !== char ? arr.push(char) : arr.pop();
    return arr;
  }, []); 

  answer = decryption.reduce((answer,word) => answer+word,"")
}

module.exports = problem2;
