// **기능 요구 사항**
// 1. 중복 문자 삭제하는 기능
// 2. 1의 과정을 가능할 때까지 반복할 수 있는 기능

function problem2(cryptogram) {
  let crypt = cryptogram;
  console.log(String(crypt))
  console.log(crypt.replace(/([a-z])\1{1,}/g, ""));
// .toString().split('')
  return crypt;
}

module.exports = problem2;

problem2("browoanoommnaon");
