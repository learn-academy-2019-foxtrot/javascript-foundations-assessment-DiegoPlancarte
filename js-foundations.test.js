// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".

// describe("divByThree", () => {
//     test("return if given number is evenly divisible by three", () => {
//         expect(divByThree(15)).toEqual("15 is divisble by three")
//         expect(divByThree(0)).toEqual("0 is divisble by three")
//         expect(divByThree(385)).toEqual("385 is not divisble by three")
//         expect(divByThree(-7)).toEqual("-7 is not divisble by three")
//     })
// })

const divByThree = (num) => {
    if (num % 3 === 0) {
        return `${num} is divisble by three`
    } else {
        return `${num} is not divisble by three`
    }
}

console.log(divByThree(15))
console.log(divByThree(0))
console.log(divByThree(385))
console.log(divByThree(-7))

// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

var helloMe = 
{firstName: "Diego",
lastName: "Plancarte",
hairColor: "black",
eyeColor: "brown",
    getInfo: function(){
        return `${this.firstName} ${this.lastName} has ${this.hairColor} hair and ${this.eyeColor} eyes.`
    }
}

console.log(helloMe.getInfo())

// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

const everyOtherW = (array) => {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray.push(array[i])
        }
    }
    return newArray.join(" ")
}

console.log(everyOtherW(randomNouns))

// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const wordSplitter = (string) => {
    let newArray = []
    for (let i = 0; i < string.length; i++) {    
        let wordArray = string[i].split("")
        let firstLetter = wordArray.shift()
        newArray.push(firstLetter.toUpperCase() + wordArray.join(""))
    }
    return newArray
}

console.log(wordSplitter(randomNouns))
// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]

const wordLength = (string) => {
    let newArray = []
    for (let i = 0; i < string.length; i++) {  
        newArray.push(string[i].length)
    }
    return newArray
}

console.log(wordLength(randomNouns))


// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"
// describe("alphabetSoup", () => {
//     test("takes in one argument and sorts the words in alphabetical order", () => {
//         expect(alphabetSoup(["learn", "academy", "sandiego"])).toEqual(["aelnr", "aacdemy", "adeginos"])
//     })
// })


const alphabetSoup = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].split("").sort().join(""))
    }
    return newArray
}

console.log(alphabetSoup([testString1, testString2,testString3]))
// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

const alphabetizer = (array) => {
    let wordJoiner = array.join("")
    let letterSplitter = wordJoiner.split("").sort().join("")
    return letterSplitter
}

console.log(alphabetizer([testString1, testString2, testString3]))

// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"
const newString = (array1, array2) => {
    let newArray = []
    for (let i = 0; i < array1.length; i++) {
        newArray.push( array1[i] + " " + array2[i])
    }
    return newArray.join(" ")
}

console.log(newString(amounts, animals))
// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"

const newString2 = (array1, array2) => {
    let newArray = []
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] > 1) {
            newArray.push( array1[i] + " " + array2[i])
        } else {
            newArray.push( array1[i] + " " + array2[i].substring(0, array2[i].length -1))
        }
    }
    return newArray.join(" ")
}

console.log(newString2(amounts,animals))