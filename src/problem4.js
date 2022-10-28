function problem4(word) {
    const newWord = [];
    const alphabetArr = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
    ];
    const wordArr = word.split('');
    for(let i=0; i<wordArr.length; i++) {
        if(wordArr[i]==' ') newWord.push(' ');
        else {
        }
    }
}

module.exports = problem4;
