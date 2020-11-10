![Node.js CI](https://github.com/oyve/celestial-moon/workflows/Node.js%20CI/badge.svg)
# celestial-moon
Calculate the moon phase.

This is an approximate calculation.

## Install

```
$ npm i celestial-moon
```

## Use

```
const moon = require('celestial-moon');

const phase = moon.calculate(2020, 11, 10, 9, 30, 0, 0);

console.log(phase.age); //since last new moon
console.log(phase.name); //'waning-crescent'
```

## Contribute
Please feel free to contribute by creating a *Pull Request* including test code.

## References
- [Wikipedia - Lunar Phase](https://en.wikipedia.org/wiki/Lunar_phase)
- [Wikipedia - New Moon](https://en.wikipedia.org/wiki/New_moon)
- [Moon phase lengths](https://minkukel.com/en/various/calculating-moon-phase/)
