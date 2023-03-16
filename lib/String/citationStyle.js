const citationStyle = function(str) {
    const regExp = /[^A-Za-z\d]'(.*?)'[^A-Za-z\d]/g;
    const result = str.replace(regExp, " \"$1\"");
    return result;
}

console.log(citationStyle('Artem: \'I won\'t\'.'))