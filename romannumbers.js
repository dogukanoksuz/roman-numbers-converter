/*
 * Roman numbers converter
 *
 * written by Doğukan Öksüz
 * www.dogukanoksuz.com.tr
 * github.com/dogukanoksuz
 *
 */

"use strict";

class RomanNumbers {
    constructor() {
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
    };

    convertToNumber = (input) => {
        // function name is explaining everything
        let result = 0;

        // uppercase the input.
        input = input.toUpperCase();

        // ES6 type parse for chars
        let arr = [...input];

        for (let i = 0; i < arr.length; i++) {
            if (i + 1 < arr.length) {
                if (this.numbers[arr[i]] >= this.numbers[arr[i + 1]]) {
                    result += this.numbers[arr[i]];
                } else {
                    result += this.numbers[arr[i + 1]] - this.numbers[arr[i]];
                    i++;
                }
            } else {
                result += this.numbers[arr[i]];
                i++;
            }
        }

        return result;
    };

    convertToRomanNumber = (input) => {
        let result = "";
        input = Number(input);

        let addDigit = (inputChar, Times) => {
            let a = "";
            Times = Math.floor(Times);

            if (Times === 1) {
                return inputChar;
            } else {
                for (let i = 0; i < Times; i++) {
                    a += inputChar;
                }
                return a;
            }
        };

        while (input !== 0) {
            if (input >= 1000) {
                result += addDigit("M", input / 1000);
                input %= 1000;
            } else if (input >= 500) {
                if (input < 900) {
                    result += addDigit("D", input / 500);
                    input %= 500;
                } else {
                    result += addDigit("CM", 1);
                    input %= 100;
                }
            } else if (input >= 100) {
                if (input < 400) {
                    result += addDigit("C", input / 100);
                    input %= 100;
                } else {
                    result += addDigit("CD", 1);
                    input %= 100;
                }
            } else if (input >= 50) {
                if (input < 90) {
                    result += addDigit("L", input / 50);
                    input %= 50;
                } else {
                    result += addDigit("XC", 1);
                    input %= 10;
                }
            } else if (input >= 10) {
                if (input < 40) {
                    result += addDigit("X", input / 10);
                    input %= 10;
                } else {
                    result += addDigit("XL", 1);
                    input %= 10;
                }
            } else if (input >= 5) {
                if (input < 9) {
                    result += addDigit("V", input / 5);
                    input %= 5;
                } else {
                    result += addDigit("IX", 1);
                    input = 0;
                }
            } else if (input >= 1) {
                if (input < 4) {
                    result += addDigit("I", input);
                    input = 0;
                } else {
                    result += addDigit("IV", 1);
                    input = 0;
                }
            }
        }
        return result;
    };
}

let _RomanNumbers = new RomanNumbers();
let RomanToDecimal = () => {
    document.getElementById("output_1").innerText = isNaN(_RomanNumbers.convertToNumber(document.getElementById("input_1").value)) ? "i think you write a wrong thing." : _RomanNumbers.convertToNumber(document.getElementById("input_1").value);
};

let DecimalToRoman = () => {
    document.getElementById("output_2").innerText = !isNaN(_RomanNumbers.convertToRomanNumber(document.getElementById("input_2").value)) ? "i think you write a wrong thing." : _RomanNumbers.convertToRomanNumber(document.getElementById("input_2").value);
};
