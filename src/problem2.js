// 입력 받은 문자열을 배열로 변환
const cryptogramArr = (string) => {
    return string.split("")
}

// 중복문자 제거 

const compare = (word) => {
    let i = 0;
    while (i !=word.length){
    if (word[i] == word[i+1]){
        word.splice(i,2);
        i=0;
    } else {
        i +=1;
    }
} return word.join("");}

// 결과값 출력
function problem2(cryptogram) {
    let arr = cryptogramArr(cryptogram);
    return compare(arr);
}

module.exports = problem2;
