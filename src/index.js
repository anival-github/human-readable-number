module.exports = function toReadable (number) {

    let units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    let tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];

    if (number === 0) { return "zero"};

    let array = number.toString().split('').map(element => +element);

    if (array[array.length - 2] === 1) {
        array[array.length - 1] += 10;
        array[array.length - 2] = '';
    }

    array[array.length - 1] = units[array[array.length - 1]];

    if ((typeof array[array.length - 2]) === 'number'){
        array[array.length - 2] = tens[array[array.length - 2]];
    }
    array[array.length - 3] = units[array[array.length - 3]] + ' hundred';

    for (i = array.length - 1; i >= 0; i -= 1) {
        if (array[i] === "") {
            array.splice(i, 1);
        }
    }

    return array.join(' ');

}
