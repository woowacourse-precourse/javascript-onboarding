let word = "I love you";
let answer = "";
let alpha = {};
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// str가지고 청개구리 사전 만들기
for (let i = 0; i < str.length; i++) {
  alpha[str[i]] = str[25 - i];
}
console.log("alpha", alpha);

//temp을 " "으로 만들고 " "가 아니라면 임시로 대문자로 변환해서 기존문자에 대응하는 알파벳을 청개구리사전에서 구하고 이후에 기존문자가 소문자였다면 temp를 소뮨자로 변환후에 answer에 대하여 만들어 준다.
for (let i = 0; i < word.length; i++) {
  let temp = " ";
  if (word[i] !== " ") {
    temp = alpha[word[i].toUpperCase()];
    if (!str.includes(word[i])) temp = temp.toLowerCase();
  }
  answer += temp;
}
console.log("answer", answer);
