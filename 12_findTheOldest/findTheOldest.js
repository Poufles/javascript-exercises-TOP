const findTheOldest = function (array) {
  let ageNext = 0;
  let ageCurrent = 0;
  let birthDate = 0;
  let deathDate = 0;
  let index = 0;
  let currentYear = new Date();

  for (object of array) {
    if (object.yearOfDeath == undefined) {
        deathDate = currentYear.getFullYear();
    } else {
        deathDate = object.yearOfDeath;
    }

    console.log(deathDate)

    birthDate = object.yearOfBirth;
    ageNext = deathDate - birthDate;

    if (ageNext > ageCurrent) {
      ageCurrent = ageNext;
      index = array.indexOf(object);
    }
  }

  return array[index];
};

// Do not edit below this line
module.exports = findTheOldest;