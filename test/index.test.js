const moon = require('../index');
const assert = require('assert');

describe("Moon - Integration Tests", function () {
    describe("Moon age", function () {
        it("it should equal", function () {
            //arrange
            const expected = {
                age: 24.27,
                phase: 'waning-crescent'
            }
            //act
            const actual = moon.calculate(2020, 11, 10, 9, 30, 00);
            //assert
            assert.deepStrictEqual(actual, expected);
        });
    });
});