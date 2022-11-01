function problem4(word) {
    let originalASCII = []
    let froggyWord = []
    for(let alphabet of word) {
        originalASCII.push(alphabet.charCodeAt())
    }
    const froggyASCII = convert(originalASCII);
    for(let ASCIInumber of froggyASCII) {
        froggyWord.push(String.fromCharCode(ASCIInumber))
    }
    return froggyWord.join('');
}

function convert(ASCII) {
    let froggyASCII = []
    for(let x of ASCII) {
        if(x >= 65 && x <= 90) froggyASCII.push(155 - x) 
        else if(x >= 97 && x <= 122) froggyASCII.push(219 - x) 
        else if(x === 32) froggyASCII.push(x)
    }
    return froggyASCII;
}



module.exports = problem4;


// A ~ Z - 65 ~ 90 번대.
// a ~ z - 97 ~ 122 번대.

// 97 + 122 = 219
// 65 + 90 = 155