function problem4(word) {
    const newWord = [];
    const alphabetArr = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
    ];
    const checkWord = /[a-zA-Z]/;
    const wordArr = word.split('');

    for(let i=0; i<wordArr.length; i++) {
        if(wordArr[i] == ' ') newWord.push(' ');
        else if(!checkWord.test(wordArr[i])) newWord.push(wordArr[i]);
        else {
            let nowIndex = 0;
            let changeIndex = 0;
            if(wordArr[i] === wordArr[i].toLowerCase()) {
                nowIndex = alphabetArr.indexOf(wordArr[i].toUpperCase());
                changeIndex = -1-nowIndex;
                newWord.push(alphabetArr[alphabetArr.length+changeIndex].toLowerCase());
            }
            else {
                nowIndex = alphabetArr.indexOf(wordArr[i]);
                changeIndex = -1-nowIndex;
                newWord.push(alphabetArr[alphabetArr.length+changeIndex]);
            }
        }
    }
    return newWord.join('');
}
module.exports = problem4;
