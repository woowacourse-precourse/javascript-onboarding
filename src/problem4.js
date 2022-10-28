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
    const reverseLetter = [
        "z",
        "y",
        "x",
        "w",
        "v",
        "u",
        "t",
        "s",
        "r",
        "q",
        "p",
        "o",
        "n",
        "m",
        "l",
        "k",
        "j",
        "i",
        "h",
        "g",
        "f",
        "e",
        "d",
        "c",
        "b",
        "a",
    ];

    // 2. 일반 배열의 Index 찾아서 반대된 배열의 문자로 바꾸기
    // - 비교는 소문자로 비교
    let wordArray = word.toLowerCase().split("");
    let reverseWord = wordArray.map((str) => {
        if (str === " ") {
            return " ";
        } else {
            return reverseLetter[letter.indexOf(str)];
        }
    });

    // 3. 대문자는 대문자로, 소문자는 소문자로
    return answer;
}

module.exports = problem4;
