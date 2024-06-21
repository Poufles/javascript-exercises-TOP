const removeFromArray = function(array, ...elements) {
    let index;
    for (element of elements) {
        for (value = 0; value < array.length; value++) {
            if (array[value] === element) {
                array.splice(value, 1);
                value = 0;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

console.log(removeFromArray([1, 2, 2, 3], 2))