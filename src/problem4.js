function isBig(letter){
    return letter===letter.toUpperCase();
}

function problem4(word){
    const [BIG_RANGE, SMALL_RANGE] =
          ['A'.charCodeAt(0)+'Z'.charCodeAt(0), 'a'.charCodeAt(0)+'z'.charCodeAt(0)];
          
    word = [...word].map((letter)=>{
        if(!/[a-zA-Z]/.test(letter)) { return letter; }
        letter = isBig(letter)
        ? String.fromCharCode(BIG_RANGE-letter.charCodeAt(0))
        : String.fromCharCode(SMALL_RANGE-letter.charCodeAt(0));
        return letter;
    })
    return word.join('');
}

module.exports = problem4;
