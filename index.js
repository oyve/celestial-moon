const MINUTES_IN_DAY = 24 * 60;
const SECONDS_IN_DAY = MINUTES_IN_DAY * 60;
const SYNODIC_MONTH = 29.530588853;

const MOON_PHASES = [
    { name: 'new-moon', end: 1 },
    { name: 'waxing-crescent', end: 6.38264692644 },
    { name: 'first-quarter', end: 8.38264692644 },
    { name: 'waxing-gibbous', end: 13.76529385288 },
    { name: 'full-moon', end: 15.76529385288 },
    { name: 'waning-gibbous', end: 21.14794077932 },
    { name: 'last-quarter', end: 23.14794077932 },
    { name: 'waning-crescent', end: 28.53058770576 },
    { name: 'new-moon', end: SYNODIC_MONTH }
]

/**
 * 
 * @param {number} year Year
 * @param {number} month Month
 * @param {number} day Day
 * @param {number} hours Hours
 * @param {number} minutes Minutes
 * @param {number} seconds Seconds
 * @param {number} utcOffset Timezone offset to UTC, i.e. -4 or +4
 */
function calculate(year, month, day, hours, minutes, seconds, utcOffset = 0) {
    let julianNewMoonReference = gregorianToJulian(2000, 1, 6, 18, 14, 0, 0); //Lunation Number 18:14 UTC, January 6, 2000
    let julianCalculate = gregorianToJulian(year, month, day, hours, minutes, seconds, utcOffset);

    let age = (julianCalculate - julianNewMoonReference) % SYNODIC_MONTH;
    let phase = getPhase(age);

    return {
        age: roundToTwoDecimals(age),
        name: phase.name
    }
}

function getPhase(age) {
    return MOON_PHASES.find((m) => age <= m.end);
}

function gregorianToJulian(year, month, day, hour, minute, second, utcOffset) {
    if (month <= 2) {
        year -= 1;
        month += 12;
    }

    let A = Math.floor(year / 100);
    let B = 2 - A + Math.floor(A / 4);
    let jDay = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
    let jTime = ((hour * (60 * 60)) + (minute * 60) + second) / SECONDS_IN_DAY;

    return jDay + jTime - utcOffset / 24;
}

function roundToTwoDecimals(num) {
    return Math.round(num * 100) / 100;
}

module.exports = {
    calculate: calculate
}