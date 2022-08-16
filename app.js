const oddishOrEvenish = (number) => {
  let sumOfNumber = [...String(number)].reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);

  return sumOfNumber % 2 == 0 ? "Even" : "Odd";
};

console.log(oddishOrEvenish(43)); 

console.log(oddishOrEvenish(373)); 

console.log(oddishOrEvenish(4433)); 
