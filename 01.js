/*
--- Day 1: Trebuchet?! ---
You try to ask why they can't just use a weather machine ("not powerful enough") and
where they're even sending you ("the sky") and why your map looks mostly blank ("you
sure ask a lot of questions") and hang on did you just say the sky ("of course, where
do you think snow comes from") when you realize that the Elves are already loading you
into a trebuchet ("please hold still, we need to strap you in").

As they're making the final adjustments, they discover that their calibration document
(your puzzle input) has been amended by a very young Elf who was apparently just excited
to show off her art skills. Consequently, the Elves are having trouble reading the values
on the document.

The newly-improved calibration document consists of lines of text; each line originally
contained a specific calibration value that the Elves now need to recover. On each line,
the calibration value can be found by combining the first digit and the last digit (in
that order) to form a single two-digit number.

For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
In this example, the calibration values of these four lines are 12, 38, 15, and 77.
Adding these together produces 142.

Consider your entire calibration document. What is the sum of all of the calibration values?
*/

// Goal: A function that sums all the calibration values
// Input: An array of strings
// Output: Int

function recoverCalibrationValues(calibrationDoc) {
    let numsToSum = []
    for (let word of calibrationDoc) {
        let digitsForOneWord = []
        for (let char of word) {
            if (!isNaN(parseInt(char))) {
                digitsForOneWord.push(char)
            } else {
                continue;
            }
        }
        let joinedDigits = digitsForOneWord[0] + digitsForOneWord[digitsForOneWord.length-1]
        numsToSum.push(joinedDigits)
    }
    const sumOfDigits = numsToSum.reduce((sum, digit) => parseInt(digit) + sum, 0)
    return sumOfDigits
}


const calibrationDoc = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"]
// Expected output: 142 (sum of 12, 38, 15, and 77)
const recoveredCalibrationDoc = recoverCalibrationValues(calibrationDoc)
console.log(recoveredCalibrationDoc)
