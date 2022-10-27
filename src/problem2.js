function problem2(cryptogram) {
    let newCryptogram = [...cryptogram];
    
    function removeDuplicateString() {
        newCryptogram.forEach((string, idx) => {
            if (string === newCryptogram[ idx + 1 ]) {
                newCryptogram.splice(idx, 2);
            }
        });
    }
    
    for (const element of [...cryptogram]) {
        removeDuplicateString();
    }
    
    return newCryptogram.join("");
}

module.exports = problem2;
