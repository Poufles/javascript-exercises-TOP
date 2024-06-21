const fibonacci = function(iteration) {
    let previous = 0;
    let current = 0;
    let next = 1;

    if (iteration < 0) {
        return `OOPS`;
    }

    for (i = 0; i < iteration; i++) {
        current = next
        next = previous + current;
        previous = current;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;