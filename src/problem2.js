const deleteDup = (str) => {
    let deletedstr = str;
    let isKeep = false;
    for (let i = 0; i < deletedstr.length - 1; i++) {
        if (deletedstr[i] === deletedstr[i + 1]) {
            if (i === 0) deletedstr = deletedstr.slice(i + 2, deletedstr.lengh);
            else if (i === deletedstr.length - 1)
                deletedstr = deletedstr.slice(0, i);
            else
                deletedstr =
                    deletedstr.slice(0, i) +
                    deletedstr.slice(i + 2, deletedstr.lengh);
            isKeep = true;
        }
    }
    return { deletedstr, isKeep };
};

const checkIsValid = (cryptogram) => {
    if (cryptogram.lengh < 1 || 1000 < cryptogram.lengh) return false;
    for (let i = 0; i < cryptogram.lengh; i++) {
        if (cryptogram[i].toUppserCase() == cryptogram[i]) return false;
    }
    return true;
};
function problem2(cryptogram) {
    if (checkIsValid(cryptogram)) return -1;
    let newstr = cryptogram;
    let keep = true;
    while (keep) {
        newstr = deleteDup(newstr).deletedstr;
        keep = deleteDup(newstr).isKeep;
    }
    return newstr;
}

module.exports = problem2;
