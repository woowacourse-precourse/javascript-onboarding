// "browoanoommnaon" -> "brown", "zyelleyz" -> "" /(\w+)\1/g
// 중복이 되더라도 홀수일때는 남아있다 -> 2개가 만나면 사라진다
function problem2(cryptogram) {
  let answer;
  let stack = [];

  for (let value = 0; value <= cryptogram.length; value++) {
    let current_value = cryptogram[value];
    if (current_value === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(current_value);
    }
  }
  answer = stack.join("");
  return answer;
}
module.exports = problem2;
