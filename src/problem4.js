 //문자의 인덱스를 반환후 reverse 해주는 함수
 const getIndex = (letters, array) => {
    const index = array.indexOf(letters);
    return  array[25 - index];
};

 //문자의 띄어쓰기/대/소문자를  판단하고 처리해주는 함수
 const diposeLetters = (letter, answer, lower, upper) => {
    //띄어쓰기 처리
    if (letter === " ") {
        answer.push(" ");
    }
    //소문자라면 인덱스 번호만큼 소문자 배열의 전체크기에서 - 해준다.
    if (lower.includes(letter)) {
        answer.push(
            getIndex(letter, lower)
        );
    }
    //대문자 인덱스 번호만큼 대문자 배열의 전체크기에서 - 해준다.
    if (upper.includes(letter)) {
        answer.push(
            getIndex(letter, upper)
        );
    }
    if (!letter.match(/[a-z A-Z]/)) {
        answer.push(letter);
    }
};

//메인 함수
function problem4(word){ 
    const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; //소문자 배열
    const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; //대문자 배열
    let answer = [];

    //인덱스를 증가시키며 문자 판별
    for(let i = 0; i < word.length; i++){
        diposeLetters(word[i], answer, lower, upper);
    }

    //답을 위해 문자열을 return
    return (answer.join(""));
}
module.exports = problem4;
