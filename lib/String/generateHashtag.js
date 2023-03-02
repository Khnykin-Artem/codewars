const generateHashtag = function(str) {
    if(str === '') {
        return false;
    }

    const strSplit = str.split(' ');

    const strArr = strSplit.map((word) => {
        if(word !== '') {
            const firstLetter = word[0];
            const newWord = word.replace(firstLetter, (firstLetter.toUpperCase()));
            return newWord;
        }
    });
    strArr.unshift('#');

    const result = strArr.join('');
    
    if(result.slice(1).length >= 140 || result === '#') { 
        return false
    }
    return result;
}

