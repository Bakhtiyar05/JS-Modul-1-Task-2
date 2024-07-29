/* Task 1 */

let arrayCem = [1, 2, 3, 4, 5, 6, 123];

function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

let sum = sumArray(arrayCem);
console.log("Arrayin cəmi: " + sum);



let arrayHasil = [1, 2, 3, 4, 5, 6, 123];

function multiplyArray(arr) {
  return arr.reduce((product, current) => product * current, 1);
}

let product = multiplyArray(arrayHasil);
console.log("Arrayin hasilı: " + product);






/* Task 2 */

let array = [1, 2, 3, 4, 5, 6, 123];

function removeDuplicates(arr) {
    let uniArray = [];

    for (let i = 0; i < arr.length; i++) {
        let exits = false;

        for (let j = 0; j < uniArray.length; j++) {
        if (arr[i] === uniArray[j]) {
            exits = true;
            break;
        }
        }

        if (!exits) {
            uniArray.push(arr[i]);
        }
    }

    return uniArray;
}

let uniArray = removeDuplicates(array);
console.log("Unikal elementlər: " + uniArray);




/* Task 3 */

let arrayNaN = [1, 'asdasd', '3', null, 'a1e23ed'];

function removeNonNumbers(arr) {
    let numberArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && !isNaN(arr[i])) {
            numberArray.push(arr[i]);
        }
    }

    return numberArray;
}

let filteredArray = removeNonNumbers(arrayNaN);
console.log("eded olmayan elem. " + filteredArray);














/* Task 4 */

let arrayMax = [1, 2, 3, 4, 5, 6, 123];

function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

let maxElement = findMax(arrayMax);
console.log("Arrayin max. elementi: " + maxElement);



let arrayMin = [1, 2, 3, 4, 5, 6, 123];

function findMin(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

let minElement = findMin(arrayMin);
console.log("Arrayin min. elementi: " + minElement);





/* Task 5 */

let sentence = "SDasdasd asd asd ada sd sdfg.";

function countCharacters(str) {
    return str.length;
}

let characterCount = countCharacters(sentence);
console.log("Cümlədəki simvol sayı: " + characterCount);




/* Task 6 */

let arrayVurIki = [1, 2, 3, 4, 5, 6, 123];

function multiplyByTwo(arr) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i] * 2);
    }

    return newArray;
}

let ikinciArray = multiplyByTwo(arrayVurIki);
console.log("Yeni array: " + ikinciArray);




/* Task 7 */

let arrayRevers = [1, 2, 3, 4, 5, 6, 123];

function reverseArray(arr) {
    let reversedArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }

    return reversedArray;
}

let reversedArray = reverseArray(arrayRevers);
console.log("Tərsinə çevrilmiş array: " + reversedArray);









/* Task 8 */

let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];

function sumArrays(arr1, arr2) {

    let resultArray = [];

    for (let i = 0; i < arr1.length; i++) {
        resultArray.push(arr1[i] + arr2[i]);
    }

    return resultArray;
}

let summedArray = sumArrays(array1, array2);
if (summedArray) {
    console.log("cavab: " + summedArray);
}



/* Task 9 */

let word = "tersinesoz";

function reverseWord(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

let reversedWord = reverseWord(word);
console.log("tersine cevrilmis soz: " + reversedWord);





/* Task 10 */

let sentence1 = "salam mənim adım leyladır";

function reverseWordsInSentence(str) {
    let words = str.split(" ");
    
    let reversedWords = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }

    return reversedWords.join(" ");
}

let reversedSentence = reverseWordsInSentence(sentence);
console.log("tersine cevrilmis cumle: " + reversedSentence);






/* Task 11 */



/* Task 12 */

/* let text = prompt("bura cumle yaz.");

function counrWords(str) {
    if (!str.trim()) return 0;
    let words = str.trim().split(/\s+/);
    return words.length;
}
let wordCount = counrWords(text);
console.log("metndeki sozlerion sayi: " + wordCount); */




/* Task 13 */

/* let sentenc2 = prompt("bura cumle yaz.");

function removeExtraSpaces(str) {
    let trimmed = str.trim();
    
    let result = trimmed.replace(/\s+/g, ' ');
    
    return result;
}
let cleanedSentence = removeExtraSpaces(sentence);
console.log("Düzgün cümlə: " + cleanedSentence); */





/* Task 14 */

/* let text1 = prompt("bura cumle yaz.");

function textTransCapitalize(str) {
    let result = '';
    let capitalize = true;

    for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (capitalize && char.match(/[a-z]/i)) {
        result += char.toUpperCase();
        capitalize = false;
    }
    else {
        result += char;
        if (char === ' ') {
            capitalize = true;
        }
    }
}
    return result;
}
let duzgunText = textTransCapitalize(text1);
console.log("Düzgün mətn: " + duzgunText); */




/* Task 15 */

function decrease(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

let array3 = [123, 44, 454, 6, 6,623, 234234, 234, 123, 1];
console.log("azalmaya gore: " + decrease(array3));





/* Task 16 */

/* let numberWrite = prompt("eded yaz");

function bubbleNum(numberWrite) {
    let numberStr = numberWrite.toString();
    
    let formatted = numberStr.split('').join(' ');
    return formatted;
}

let bubbledNum = bubbleNum(numberWrite);
console.log("cavab " + bubbledNum); */






/* Task 17 */

/* let text4 = prompt("bir cumle yaz");

function repeatWords(str) {
    let words = str.trim().split(/\s+/);
    
    let wordCount = new Map();
    
    for (let word of words) {
        word = word.toLowerCase();
            if (wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word) + 1);
        }
        else {
            wordCount.set(word, 1);
        }
    }
    
    let repeatWordsCount = 0;
    for (let count of wordCount.values()) {
        if (count > 1) {
            repeatWordsCount++;
        }
    }
    return repeatWordsCount;
}

let wordsRepeat = repeatWords(text4);
console.log("tekrar sozlern sayi " + wordsRepeat); */




/* Task 19 */

/* let students = {
    "AAAA": { score: 23, passed: false },
    "BBBB": { score: 55, passed: true },
    "CCCC": { score: 70, passed: true },
    "DDDD": { score: 32, passed: false },
};
    function removeStudent(students) {
        for (let student in students) {
        if (students[student].passed === false) {
            deleteStudent[student];
        }
        }
    }
removeStudent(students);
console.log("imtahandan kecen talaebeler: ", students); */




/* Task 20 */

/* let hourlySalary = parseFloat(prompt("bir heftelik emek haqqi yaz"));
let weekHours = parseFloat(prompt("heftelik is saatin yaz"));

function calcMonth(hourlySalary, weekHours) {
    const normalHours = 40;
    const overtime = 2;

    let normalSalary = 0;
    let overtimeSalary = 0;

    if (weekHours > normalHours) {
        normalSalary = normalHours * hourlySalary;
        overtimeSalary = (weekHours - normalHours) * hourlySalary * overtime;
    }
    else {
        normalSalary = weekHours * hourlySalary;
    }

    let monthlyWage = (normalSalary + overtimeSalary) * 4;
    return monthlyWage;
}

let monthly = calcMonth(hourlySalary, weekHours);
console.log("Aylıq əmək haqqı: " + monthly.toFixed(2) + " AZN"); */





/* Task 21 */

/* let text5 = prompt("Mətni daxil edin:");

function replaceWord(text5, oldWord, newWord) {
    let regex = new RegExp(oldWord, 'g');
    return text5.replace(regex, newWord);
}
let newWord = replaceWord(text5, "ADNA", "ADNSU");
console.log("yeni soz: " + newWord); */




/* Task 22 */

/* let number = prompt("3 reqemli ededler");

if (number.length === 3 && !isNaN(number)) {
    function sumNums(num) {
        let nums = num.split('');
        let sum = 0;
        
        for (let num of nums) {
            sum += parseInt(num);
        }
        
        return sum;
    }
    let result = sumNums(number);
        console.log("caemi: " + result);
    }
    else {
        console.log("zehmet olmasa 3 req. eded yaz");
    } */








/* Task 25 */

/* let input = prompt("arr elementleri yaz vergul ile ayiir");
let array4 = input.split(',').map(Number);

function countDivisible(arr) {
    let count = 0;
        for (let element of arr) {
            if (element % 5 === 0) {
            count++;
            }
        }
        
    return count;
}

let beseBolunur = countDivisible(array4);
console.log("5 e bolunen dedelerin sayi " + beseBolunur); */



/* Task 26 */

/* let input1 = prompt("arr elementleri yaz vergul ile ayiir");
let array5 = input1.split(',').map(Number);

function findLastNum(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 7 === 0) {
        return arr[i];
        }
    }
    return null;
}
let sonuncuEdede = findLastNum(array5);

if (sonuncuEdede !== null) {
    console.log("7 ye bolunne sonuncu eded: " + sonuncuEdede);
}
else {
    console.log("7 ye bolunen yoxdu");
} */






/* Task 27 */

/* let input2 = prompt("arr elementleri yaz vergul ile ayiir");
let array6 = input2.split(',').map(Number);

function changeMinMax(arr) {
    if (arr.length === 0) return arr;

    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }

    let tem = arr[minIndex];
        arr[minIndex] = arr[maxIndex];
        arr[maxIndex] = tem;

    return arr;
}

let changedArr = changeMinMax(array6);
console.log("yeni array: " + changedArr.join(', ')); */



/* Task 28 */

/* let input3 = prompt("arr elementleri yaz vergul ile ayiir");
let array7 = input3.split(',').map(Number);

function getRandomElement(arr) {
    if (arr.length === 0) return null;
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
let randomElem = getRandomElement(array7);

if (randomElem !== null) {
    console.log("tesadufi secilen eded: " + randomElem);
}
else {
    console.log("boşdu.");
} */



/* Task 30 */

/* let input4 = prompt("bir soz yazin");

function polindrom(str) {
    let cleanStr = str.toLowerCase().replace(/\s+/g, '');
    let reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

if (polindrom(input4)) {
    console.log('polindrom.');
}
else {
    console.log('polindrom deyil.');
} */



/* Task 31 */

/* let word1 = prompt("birinci soz");
let word2 = prompt("ikinci soz");

function anagrams(str1, str2) {
    let Str1 = str1.toLowerCase().replace(/\s+/g, '');
    let Str2 = str2.toLowerCase().replace(/\s+/g, '');
    
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }
    
    let sortedStr1 = Str1.split('').sort().join('');
    let sortedStr2 = Str2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

if (anagrams(word1, word2)) {
    console.log('anagramdir');
}
else {
    console.log('anagram deyil.');
} */





/* Task 32 */

/* let input5 = prompt("Bir mətn daxil edin:");

function removeVovel(text) {
    let vowelsReg = /[aeiouAEIOU]/g;
    let result = text.replace(vowelsReg, '');
    return result;
}

let updateText = removeVovel(input5);

console.log("saitleri silindi " + updateText); */



/* Task 33 */

/* let symbolsStr = +prompt("simvol yaz");
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?/`~';

function generRanStr(symbolsStr) {
    let result = '';
    const charactersLength = characters.symbolsStr;
    
    for (let i = 0; i < symbolsStr; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters[randomIndex];
    }

    return result;
}
let randomStr = generRanStr(symbolsStr);

console.log("tesadufi str " + randomStr);
 */


/* Task 34 */

/* let words = prompt("Bir söz daxil edin:");

const sait = 'aeiouAEIOU';
const samit = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

function countSatiSamit(text) {
    let saitCount = 0;
    let samitCount = 0;
    for (let char of text) {

        if (sait.includes(char)) {
            saitCount++;
        }
        else if (samit.includes(char)) {
            samitCount++;
        }
    }
    return { sait: saitCount, samit: samitCount };
}
let counts = countSatiSamit(word);
console.log("sait sayi" + counts.sait);
console.log("samit sayi " + counts.samit); */




/* Task 35 */

/* let number35 = +prompt("eded yaz");
function mukemmelEded(num) {
    if (num <= 1) return false;

    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
        sum += i;
        }
    }
    return sum === num;
}

if (mukemmelEded(number)) {
    console.log(number + " mukemmeldir");
}
else {
    console.log(number + " mukemmel deyil.");
} */





/* Task 36 */

/* let number36 = +prompt("eded yaz");

function sumDigits(num) {
    num = Math.abs(num);
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
let result = sumDigits(number36);
console.log("ededin reqemleri cemi" + result); */










































































































































































































