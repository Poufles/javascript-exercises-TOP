const getTheTitles = function(array) {
    let title = [];
    for (object of array) {
        title.push(object.title);
    }

    return title;
};

// Do not edit below this line
module.exports = getTheTitles;