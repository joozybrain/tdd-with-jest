/* Write a function kebabize(input) to convert a camel case input string into a kebab case.

The function only needs to take care of lower- and upper-case alphabets. Non-alphabetical characters (e.g. numbers, punctuation (_ - + ? )) can be ignored

Examples:
kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
*/

function kebabize(input) {
    var kebabArray = [];
    var compArray = [];
    kebabArray = input.split('');
    compArray = input.split('');

    for (var i = 0; i < kebabArray.length; i++) {
        if (kebabArray[i].toUpperCase() === compArray[i]) {
            kebabArray[i] = "-" + kebabArray[i].toLowerCase();
        }

        if (isNaN(kebabArray[i]) !== true) {
            kebabArray[i] = "";
        }
    }
    
    var output = kebabArray.join('');
    return output;    
}

module.exports = kebabize