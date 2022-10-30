// 중복문자 제거 
const compare = (word) => {
    while(true){
        const wordLength = word.length
        word = word.replace(/([a-z])\1+/g,'')
        if(wordLength === word.length){
            break
        }
    } return word
}

// 결과값 출력
function problem2(cryptogram) {
    return compare(cryptogram);
}

module.exports = problem2;