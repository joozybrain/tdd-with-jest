const kebabize = require("../src/kebabize");

test("hiThere should be kebabized to hi-there", function() {
  expect(kebabize("hiThere")).toEqual("hi-there");
});

test("hiThereBruceWayne should be kebabized to hi-there-bruce-wayne", function() {
  expect(kebabize("hiThereBruceWayne")).toEqual("hi-there-bruce-wayne");
});

// write additional tests to ensure kebabize() works as expected
test("3Camel should be kebabized to -camel", function() {
  expect(kebabize("3Camel")).toEqual("-camel");
});

test("3Camel30humps4Legs should be kebabized to -camel", function() {
  expect(kebabize("3Camel301humps4Legs")).toEqual("-camelhumps-legs");
});