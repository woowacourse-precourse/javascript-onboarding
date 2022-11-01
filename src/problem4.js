function problem4(word) {
    return reverseWord(word);
}

function reverseWord(word) {
    const wordSplit = word.split("");
    return wordSplit.reduce(alphabetReverse, "");
}

function alphabetReverse(newWord, char) {
    newWord += upperCaseReverse(char) || lowerCaseReverse(char) || char;
    return newWord;
}

function upperCaseReverse(char) {
    const ALPHABET_LENGTH = 26;
    const upperCase = ['A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    if (upperCase.includes(char)) {
        return upperCase[ALPHABET_LENGTH - upperCase.indexOf(char) - 1];
    }
    return 0;
}

function lowerCaseReverse(char) {
    const ALPHABET_LENGTH = 26;
    const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    if (lowerCase.includes(char)) {
        return lowerCase[ALPHABET_LENGTH - lowerCase.indexOf(char) - 1];
    }
    return 0;
}

module.exports = problem4;