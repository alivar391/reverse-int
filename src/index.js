module.exports = function reverse (n) {
    let text = String(Math.abs(n));
    let output = '';
    for (let i = text.length-1; i >= 0; i--){
        output = output + text[i];
    }
    return output;
}
