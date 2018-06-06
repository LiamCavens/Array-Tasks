var arrayTasks = {

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insertAt: function (arr, itemToAdd, index) {
    arr.splice(index, 0, itemToAdd);
    return arr;
  },

  square: function (arr) {
    let sqrdNumbers = [];

    arr.forEach(function (number) {
      sqNum = number * number;
      sqrdNumbers.push(sqNum);
    });
    return sqrdNumbers;
  },

  sum: function (arr) {
    let sum = 0;

    arr.forEach(function (number) {
      sum += number;
    });
    return sum;
  },

  findDuplicates: function (arr) {
    let duplicates = [];

    arr.forEach(function (number, index) {
      if (arr.indexOf(number, index + 1) > -1) {
        if (duplicates.indexOf(number) === -1) {
          duplicates.push(number);
        }
      }
    });
    return duplicates;
  },

  removeAndClone: function (arr, valueToRemove) {
    let uniqueNums = [];

    arr.forEach(function (number) {
      if (number !== valueToRemove) {
        uniqueNums.push(number);
      }
    });
    return uniqueNums;
  },

  findIndexesOf: function (arr, itemToFind) {
    return arr.reduce(function (accumulator, arrayItem, index) {
      if (arrayItem === itemToFind) {
        accumulator.push(index);
      };

      return accumulator;
    }, []);
  },

  sumOfAllEvenNumbersSquared: function (arr) {
    return arr
      .filter(function (number) { //scans over array
        return (number % 2 === 0) //returning boolean, if true, keeps it in array
      }).map(function (number) { //map loops over array, creates and array of values I return
        return number ** 2;
      }).reduce(function (total, sqrdNumber) { //loops the array, the current array is only sqrdNumbers
        return total + sqrdNumber; // pretty much forEach in the array and adding to total
      }, 0); //this is original total   
  }
};

module.exports = arrayTasks;
