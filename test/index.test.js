const moon = require('../index');
const assert = require('assert');

describe("Moon - Integration Tests", function () {
    describe("Moon age", function () {
        it("it should equal", function () {
            //arrange
            const expected = {
                age: 24.27,
                name: 'waning-crescent'
            }
            //act
            const actual = moon.calculate(2020, 11, 10, 9, 30, 0, 0);
            //assert
            assert.deepStrictEqual(actual, expected);
        });
    });
});