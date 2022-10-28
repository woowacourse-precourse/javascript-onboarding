function problem4(word) {
    const answer = reverseWord(word);
    return answer;
}

function reverseWord(word) {
    const ALPHABET_LENGTH = 26;
    let newWord = '';
    const upperCase = ['A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    for (let i = 0; i < word.length; i++) {
        if (upperCase.includes(word[i])) {
            const wordIndex = upperCase.indexOf(word[i]);
            newWord += upperCase[ALPHABET_LENGTH - wordIndex - 1];
        } else if (lowerCase.includes(word[i])) {
            const wordIndex = lowerCase.indexOf(word[i]);
            newWord += lowerCase[ALPHABET_LENGTH - wordIndex - 1];
        } else {
            newWord += word[i];
        }
    }
    return newWord;
}
module.exports = problem4;