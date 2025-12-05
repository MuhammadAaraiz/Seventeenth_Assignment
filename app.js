// Question no 1
// let first_Name = prompt("Enter your First name here :")
// let last_Name = prompt("Enter your Last name here :")
// let full_Name = `${first_Name} ${last_Name}`
// alert(`Hello ${full_Name} how can i help you? `)

// Question no 2
// let fav_Mobile = prompt("My favorite phone is: ")

// alert(`Length of String : ${fav_Mobile.length}`)

// Question no 3
// let country = "Pakistani"
// let index = country.indexOf("n")

// console.log(`String: ${country} \nindex of 'n': ${index}`)

// Question no 4
// let word = "Hello World";
// let last_Index = word.lastIndexOf("l")
// console.log(`String: ${word}\nLast index of 'l': ${last_Index}`)


// Question no 5
// let country = "Pakistani"
// let index = country.charAt(3)

// console.log(`String: ${country} \nCharacter at index 3 : ${index}`)


// Question no 6

// let first_Name = prompt("Enter your First name here :")
// let last_Name = prompt("Enter your Last name here :")

// let full_Name = first_Name.concat(" ", last_Name);
// alert(`Hello ${full_Name} how can i help you? `)


// Question no 7
// let city = "Hyderabad"
// let new_City = city.replace("Hyder", "Islam")

// console.log(new_City)

// Question no 8
// let message = "Ali and Sami are best friends. They play cricket and football together"
// let updatedMessage = message.replace(/and/g, "&");

// console.log(updatedMessage)


// Question no 9
// let string = "472"
// let num = Number(string)

// console.log(`Value: ${string}\nType: ${typeof string}`)
// console.log(`Value: ${num}\nType: ${typeof num}`)


// Question no 10
// let user_Input = prompt("Enter your input here:")

// let upper_Case = user_Input.toUpperCase()
// alert(`Upper_Case: ${upper_Case}`)


// Question 11
// let userInput = prompt("Enter some text:");

// userInput = userInput.toLowerCase();

// let words = userInput.split(" ");

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }

// let titleCaseInput = words.join(" ");

// document.writeln("Original Input: " + userInput + "<br>");
// document.writeln("Title Case Input: " + titleCaseInput);


// Question no 12
// let num = 35.36

// let str = num.toString()
// let result = str.replace(".", "")

// console.log(`Number: ${num} \nResult: ${result}`)

// Question 13
// let username = prompt("Enter your username:");

// let isValid = true;

// for (let i = 0; i < username.length; i++) {
//     if (username[i] === "!" || username[i] === "," || username[i] === "." || username[i] === "@") {
//         isValid = false;
//         break;
//     }
// }
// if (isValid) {
//     document.writeln("Username is valid: " + username);
// } else {
//     alert("Please enter a valid username without [@ . , !]");
// }


// Question 14
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Welcome! What do you want to order?");

// let searchItem = userInput.toLowerCase();

// let found = false;
// let index = -1;

// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === searchItem) {
//         found = true;
//         index = i;
//         break;
//     }
// }

// if (found) {
//     alert(userInput + " is available in the bakery at index " + index);
// } else {
//     alert("We are sorry. " + userInput + " is not available in the bakery.");
// }



// Question 16
// let university = "University of Karachi";

// let arr = university.split("");

// for (let i = 0; i < arr.length; i++) {
//     document.writeln(arr[i] + "<br>");
// }


// Question 17
// let userInput = prompt("Enter some text:");
// let last_Char = userInput.charAt(userInput.length - 1);

// document.writeln(`User input: ${userInput}</br> Last character of input: ${last_Char}`);


// // Question 18
// let str = "The quick brown fox jumps over the lazy dog";

// let lowerStr = str.toLowerCase();

// let count = lowerStr.split("the").length - 1;

// document.writeln(`Text : ${str} <br> There are ${count} occurrence,s of word "the"`);

