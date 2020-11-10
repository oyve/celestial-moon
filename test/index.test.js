const moon = require('../index');
const assert = require('assert');

describe("Moon - Integration Tests", function () {
    describe("Moon age", function () {

        it("it should be new-moon", function () {
            //arrange
            const expected = 'new-moon'
            //act
            const actual = moon.calculate(2000, 7, 1, 19, 21, 0, 0); //1 July 2000 @ 19:21:00
            //assert
            assert.strictEqual(actual.name, expected);
        });

        it("it should be new-moon with time zone adjusted", function () {
            //arrange
            const expected = 'new-moon'
            //act
            const actual = moon.calculate(2020, 11, 15, 1, 7, 0, -4); //15 Nov 2020, 01:07 @ UTC-4
            //assert
            assert.strictEqual(actual.name, expected);
        });

        it("it should be waning-crescent", function () {
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