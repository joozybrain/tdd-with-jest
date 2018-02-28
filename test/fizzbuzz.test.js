const fizzbuzz = require("../src/fizzbuzz");

it("1 should return number 1", function() {
  expect(fizzbuzz(1)).toEqual(1);
});

it("3 should return fizz", function() {
  expect(fizzbuzz(3)).toEqual("fizz");
});

it("5 should return buzz", function () {
  expect(fizzbuzz(5)).toEqual("buzz");
});

it("15 should return fizzbuzz", function () {
  expect(fizzbuzz(15)).toEqual("fizzbuzz");
});

it("20 should return buzz", function () {
  expect(fizzbuzz(20)).toEqual("buzz");
});

it("9 should return buzz", function () {
  expect(fizzbuzz(9)).toEqual("fizz");
});