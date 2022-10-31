const ASC_CODE = {
    A: 65,
    Z: 90,
    a: 97,
    z: 122
}

function problem4(word) {
    const wordArr = [...word];
    const ascCodeArr = wordArr.map(string => string.charCodeAt(0));
    const convertedWordArr = ascCodeArr.map(num => {
        if (ASC_CODE.A <= num && num <= ASC_CODE.Z) {
            return String.fromCharCode(ASC_CODE.A + ASC_CODE.Z - num)
        }
        if (ASC_CODE.a <= num && num <= ASC_CODE.z) {
            return String.fromCharCode(ASC_CODE.a + ASC_CODE.z - num)
        }
        return String.fromCharCode(num);
    });
    
    return convertedWordArr.join("");
}

module.exports = problem4;
