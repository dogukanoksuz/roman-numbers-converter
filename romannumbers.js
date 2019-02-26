/*
 * Roman numbers converter
 *
 * written by Doğukan Öksüz
 * www.dogukanoksuz.com.tr
 * github.com/dogukanoksuz
 *
 */

class RomanNumbers {
    constructor () {
        this.numbers = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
            1: 'I',
            5: 'V',
            10: 'X',
            50: 'L',
            100: 'C',
            500: 'D',
            1000: 'M'
        }
    }

    convertToNumber (input) {
        let result = 0;

        if (input.length === 1) {
            return this.numbers[input];
        }

        if (input.length < 1) {
            return result;
        }

        let arrayOfChars = [...input];

        for (let i = 1; i < arrayOfChars.length; i++) {
            if (this.numbers[arrayOfChars[i - 1]] < this.numbers[arrayOfChars[i]]) {
                result -= this.numbers[arrayOfChars[i-1]] - this.numbers[arrayOfChars[i]];
            }

            if (this.numbers[arrayOfChars[i-1]] > this.numbers[arrayOfChars[i]]) {
                result += this.numbers[arrayOfChars[i-1]];
            }

            if (this.numbers[arrayOfChars[i-1]] === this.numbers[arrayOfChars[i]]) {
                result += this.numbers[arrayOfChars[i-1]];
            }

            if (i === arrayOfChars.length - 1 && arrayOfChars.length > 2) {
                result += this.numbers[arrayOfChars[i]];
            }
        }

        return result;
    }
}

let _RomanNumbers = new RomanNumbers();
let calculate = () => {
    document.getElementById("output").innerText = _RomanNumbers.convertToNumber(document.getElementById("input").value);
};
