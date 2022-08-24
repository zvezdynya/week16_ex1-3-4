//Практическое задание 1
const arrInputDatas = [];
let reg = /^[0-9]+$/;
function sortArray() {
    for (;;) {
        let dataValue = prompt('Введите значение :)', '');
        if(reg.test(dataValue) !== true) break;
        arrInputDatas.push(dataValue);
        arrInputDatas.sort( (a, b) => a - b );
    }
}
function sumInput() {
    sortArray();
    const summ = arrInputDatas.reduce(function(sum, elem) {
            return +sum + +elem;
    });
    return console.log(summ);
}
sumInput();
document.querySelector('#array').innerHTML += 'Array: ' + arrInputDatas;
document.querySelector('#length').innerHTML += 'Array length: ' + arrInputDatas.length;

//Практическое задание 3.1
const frontEnd = ['js', 'css', 'html',];
console.log(frontEnd[0]);

//Практическое задание 3.2
const setOfDataTypes = [0, 1, false, 2, undefined, 3, '', null,];
const filteredSetOfDataTypes = setOfDataTypes.filter(
    el=>el !== 0 && el !== false && el !== null && el !== '' && el !== undefined);
console.log(setOfDataTypes);
console.log(filteredSetOfDataTypes);

//Практическое задание 4
const arrNumbers = [[1, 2], [1, 2, 3], [1, 2, 3, 4]];
const subArrNumbers = arrNumbers.findIndex(el=>el.length > 3);
console.log(subArrNumbers);