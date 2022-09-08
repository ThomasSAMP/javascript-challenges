const factorial = (number) => {
  var arrayNum = [];
  var result = 1;

  while(number > 0) {
    arrayNum.push(number);
    number--;
  }

  for (var element of arrayNum) {
    result = element * result;
  }

  return result;
}

module.exports = factorial;