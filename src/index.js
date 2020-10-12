module.exports = function toReadable(number) {
    /* Array of units as words */
    units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    /* Array of tens as words */
    tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (parseInt(number) === 0) return "zero";

    if (number < 20) return units[number];
    if (number < 100) {
        if (number % 10 === 0) return tens[parseInt(number / 10)];
        else return tens[parseInt(number / 10)] + " " + units[number % 10];
    }
    if (number % 100 === 0) 
        return units[parseInt(number / 100)] + " hundred";
    
    let ost = number % 100;

    if (ost < 20) return units[parseInt(number / 100)] + " hundred " + units[ost];

    if (ost % 10 === 0)
        return units[parseInt(number / 100)] + " hundred " + tens[parseInt(ost / 10)];
    else
        return (units[parseInt(number / 100)] + " hundred " + tens[parseInt(ost / 10)] + " " + units[ost % 10]);
};
