let raceNumber = Math.floor(Math.random() * 1000);
// how do i set a prompt as an either/or?!?
let runner_registered_early = true;
let runner_age = 14;
// how do I set runner_age to only accept postive integers?!?
//let runner_age = prompt("How old are you?");

if (runner_age > 18  && runner_registered_early === true) {
    raceNumber += 1000;
};

if (runner_age > 18 && runner_registered_early === true) {
    console.log(`Racer #${raceNumber}, your race will begin at 9:30 am.`);
} else if (runner_age > 18 && runner_registered_early === false) {
    console.log(`Racer #${raceNumber}, your race will begin at 11:00 am.`);
} else if (runner_age < 18) {
    console.log(`Racer #${raceNumber}, your race will begin at 12:30 pm.`);
};
