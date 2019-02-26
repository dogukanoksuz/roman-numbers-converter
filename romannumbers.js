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
        // init numbers class with needed numbers/symbols
        this.numbers = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        }
    }

    convertToNumber = (input) => {
        // function name is explaining everything
        let result = 0;

        // uppercase the input.
        input = input.toUpperCase();

        // ES6 type parse for chars
        let arr = [...input];

        for (let i = 0; i < arr.length; i++) {
            if (i + 1 < arr.length) {
                if (this.numbers[arr[i]] >= this.numbers[arr[i+1]]) {
                    result += this.numbers[arr[i]];
                } else {
                    result += this.numbers[arr[i+1]] - this.numbers[arr[i]];
                    i++;
                }
            } else {
                result += this.numbers[arr[i]];
                i++;
            }
        }

        return result;
    }
}

let _RomanNumbers = new RomanNumbers();
let calculate = () => {
    if (isNaN(_RomanNumbers.convertToNumber(document.getElementById("input").value))) {
        document.getElementById("output").innerText = "i think you write a wrong thing.";
    } else {
        document.getElementById("output").innerText = _RomanNumbers.convertToNumber(document.getElementById("input").value);
    }
};
