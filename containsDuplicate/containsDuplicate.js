let numbersArray = [1,2,3,4,1];

var checkIfContainsDuplicate = function (numbersArray) {
    const jsonList = {};

    for (const element of numbersArray) {
      jsonList[element] = (jsonList[element] || 0) + 1;
      if (jsonList[element] > 1) return true
    }
  
    return false;
};

let containsDuplicate = checkIfContainsDuplicate(numbersArray);
console.log(containsDuplicate);