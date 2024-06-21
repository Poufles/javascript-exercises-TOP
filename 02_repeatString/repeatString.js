const repeatString = function(value, iteration) {
    if (iteration < 0) {
        return `ERROR`;
    }

    let result = ``;
    for (i = 0; i < iteration; i++) {
        result = result + value;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;