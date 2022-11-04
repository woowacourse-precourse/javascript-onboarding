function problem4(word) {
  // console.log(word);
  // let answer = [];
  // let temp = [];
  // let newTemp = [];
  // let array = [
  //   "a",
  //   "b",
  //   "c",
  //   "d",
  //   "e",
  //   "f",
  //   "g",
  //   "h",
  //   "i",
  //   "j",
  //   "k",
  //   "l",
  //   "m",
  //   "n",
  //   "o",
  //   "p",
  //   "q",
  //   "r",
  //   "s",
  //   "t",
  //   "u",
  //   "v",
  //   "w",
  //   "x",
  //   "y",
  //   "z",
  // ];
  // let reversed = Array.from(array).reverse();

  // // a-z for문 돌려서 index값 구하기
  // for (let i = 0; i < word.length; i++) {
  //   if (`${word[i]}` === `${word[i]}`.toUpperCase()) {
  //     // console.log("대문자 or 빈칸");
  //     if (`${word[i]}` !== " ") {
  //       temp.push(array.indexOf(`${word[i]}`.toLowerCase()));
  //     } else {
  //       temp.push(-1);
  //     }
  //   } else {
  //     temp.push(array.indexOf(`${word[i]}`));
  //   }
  // }

  // //z-a index값 대입 후 값 return
  // for (let ri = 0; ri <= temp.length; ri++) {
  //   // console.log();
  //   if (reversed[temp[ri]] === undefined) {
  //     newTemp.push(" ");
  //   } else {
  //     newTemp.push(reversed[temp[ri]]);
  //   }
  // }

  // // word로 받은 매개변수 대문자 소문자 파악 후 변경
  // for (let uc = 0; uc < word.length; uc++) {
  //   if (word[uc] === word[uc].toUpperCase() && word[uc] !== " ") {
  //     // console.log(uc);
  //     // console.log(newTemp[uc]);
  //     // let upper = newTemp[uc].toUpperCase();
  //     // newTemp[uc].replace(newTemp[uc], upper);
  //     // // answer[uc].replace(`${answer[uc]}`, `${upper}`);
  //     // newTemp[uc].toUpperCase();
  //     newTemp[uc] = newTemp[uc].toUpperCase();
  //   }
  // }
  // //맨 뒤에 '' 생성이 되어서
  // newTemp.pop();

  // answer = newTemp.join("");
  // // console.log(answer);
  // // newTemp[0] = "a";
  // return answer;

  // ------------------------------------------------------

  // let word = "I love you"
  let answer = "";
  let alpha = {};
  let str = "abcdefghijklmnopqrstuvwxyz";

  // str가지고 청개구리 사전 만들기
  for (let i = 0; i < str.length; i++) {
    alpha[str[i]] = str[25 - i];
  }
  // console.log("alpha", alpha);

  //temp을 " "으로 만들고 " "가 아니라면 임시로 대문자로 변환해서 기존문자에 대응하는 알파벳을 청개구리사전에서 구하고 이후에 기존문자가 소문자였다면 temp를 소뮨자로 변환후에 answer에 대하여 만들어 준다.
  for (let i = 0; i < word.length; i++) {
    let temp = " ";
    if (word[i] !== " ") {
      temp = alpha[word[i].toLowerCase()];
      if (!str.includes(word[i])) temp = temp.toUpperCase();
    }
    answer += temp;
  }
  // console.log("answer", answer);

  return answer;
}

// module.exports = problem4;

let start = new Date().getTime();
let ex = "The Project Gutenberg eBook of Sunshine and snow".repeat(1000000);
problem4(ex);
let end = new Date().getTime();
console.log("start", start, "end", end);
console.log("test시간 :", end - start);

// problem4("I love you");
