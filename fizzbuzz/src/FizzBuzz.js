function FizzBuzz(num) {
  if (num % 15 === 0) {
    return 'fizzbuzz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else {
    return num;
  };
};

for (i = 0; i <= 100; i++) {
    console.log(FizzBuzz(i));
}
