const reverseNumber = (num) => {
  let reversedNumber = 0;
  while (num > 0) {
    reversedNumber = reversedNumber * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversedNumber;
};

console.log(reverseNumber(143));

/*You can also use 

const reversedNumber = parseInt(Math.abs(number).toString().split('').reverse().join('')) * Math.sign(number);

*/
