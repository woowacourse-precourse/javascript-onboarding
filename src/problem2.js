// 입력 받은 문자열을 배열로 변환
const cryptogramArr = (string) => {
    return string.split("")
}

// 중복문자 제거 
let i = 0;
const compare = (word) => {
    while (i !=word.length){
    if (word[i] == word[i+1]){
        word.splice(i,2);
        i=0;
    } else {
        i +=1;
    }
} return word.join("");}


// function problem2(cryptogram) {
//   var answer;
//   return answer;
// }

// module.exports = problem2;
