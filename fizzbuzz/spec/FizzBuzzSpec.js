describe('FizzBuzz', function() {
  it('Returns fizz when given 3', function() {
    expect(FizzBuzz(3)).toEqual('fizz')
  });

  it('Returns buzz when given 5', function() {
    expect(FizzBuzz(5)).toEqual('buzz')
  });

  it('Returns fizzbuzz when given 15', function() {
    expect(FizzBuzz(15)).toEqual('fizzbuzz')
  });

  it('Returns 4 when given 4', function() {
    expect(FizzBuzz(4)).toEqual(4)
  });

  it('Returns fizz when given 6', function() {
    expect(FizzBuzz(6)).toEqual('fizz')
  });

  it('Returns buzz when given 5', function() {
    expect(FizzBuzz(10)).toEqual('buzz')
  });

  it('Returns fizzbuzz when given 30', function() {
    expect(FizzBuzz(30)).toEqual('fizzbuzz')
  });
});
