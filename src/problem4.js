function problem4(word) {
    var answer;
    // 1. 일반 배열과 반대된 배열 만들기
    const letter = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const reverseLetter = letter.slice().reverse();

    // 2. 일반 배열의 Index 찾아서 반대된 배열의 문자로 바꾸기
    // - 비교는 소문자로 비교
    let LowerCaseWordArray = word.toLowerCase().split("");
    let reverseWord = LowerCaseWordArray.map((str) => {
        if (str === " ") {
            return " ";
        } else {
            return reverseLetter[letter.indexOf(str)];
        }
    });

    // 3. 대문자는 대문자로, 소문자는 소문자로
    const wordArray = word.split("");
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === wordArray[i].toUpperCase()) {
            reverseWord[i] = reverseWord[i].toUpperCase();
        }
    }
    answer = reverseWord.join("");

    return answer;
}

module.exports = problem4;
