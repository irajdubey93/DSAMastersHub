const inputArray = [1, 2, 3, 1];
const output = createJsonList(inputArray);
console.log(output);

function createJsonList(arr) {
  const jsonList = {};

  for (const element of arr) {
    jsonList[element] = (jsonList[element] || 0) + 1;
  }

  return jsonList;
}


