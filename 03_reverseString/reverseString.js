const reverseString = function(value) {
    let reverse = ``;
    for (i = value.length - 1; i >= 0; i--) {
        reverse += value[i];
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;