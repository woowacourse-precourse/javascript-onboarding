function problem4(word) {
  let str = "";
  let unicoded = [];
  let result = [];

  for (let i = 0; i < word.length; i++) {
    str += word[i];
    unicoded.push(str.charCodeAt(i)); //[65, 98, 32, ..]
    if (unicoded[i] === 32) { //넘기게 하고,
      result.push(" ");
    } else if (unicoded[i] <= 90) { //범위 안에서만 돌리게
      result.push(String.fromCharCode(155 - unicoded[i]));
    } else result.push(String.fromCharCode(219 - unicoded[i]));
  }

  return result.join("");
}

//유니코드 범위를 알파벳까지만

module.exports = problem4;
