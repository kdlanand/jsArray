
// Javascript writtenby Ananda Kandel(M23W0209)

//To check the number either positive or negative
// let myNumber2 = 10;
// if (myNumber2 > 0) {
//     console.log('myNumber is positive');
// } else if (myNumber2 < 0) {console.log('myNumber is negative');
// } else {console.log('myNumber is zero');
//  }
// let MyName = prompt("What is your name?");
// console.log(MyName);

// // day of week
// let dayOfWeek = 'Monday';
// switch (dayOfWeek) {case 'Monday':console.log('It\'s Monday!');
// break;
// case 'Tuesday':console.log('It\'s Tuesday!');
// break;
// case 'Wednesday':console.log('It\'s Wednesday!');
// break;
// default:console.log('It\'s some other day!');
// }

// // Activites 1
// let number = prompt ("Enter a number:");
// if (number % 2 === 0 ) {
//     console.log("The number is even.");
//     } else {
//         console.log("The number is odd.");
//     }

// // Activites 2
// let grade = prompt("Enter your grade (0-100):");
// let letterGrade;
// switch(true) {
//     case (grade>= 90&& grade<= 100):
//         letterGrade = "A";
//         break;
//     case (grade>= 80 && grade<= 89):
//         letterGrade = "B";
//         break;
//     case (grade>= 70 && grade<= 79):
//         letterGrade = "C";
//         break;
//     case (grade>= 60 && grade<= 69):
//         letterGrade = "D";
//         break;
//     default:
//         letterGrade = "F";
// }
// console.log(`Your letter grade is ${letterGrade}`);

// Javascript writtenby Ananda Kandel(M23W0209)

const cities = [];
cities.push("Tokyo");
cities.push("Nagoya" );
cities.push("Sapporo" );
cities.pop();
cities.push("Fukuoka" );
cities.reverse();
console.log(cities);

const countries = [
    ["Japan", "Tokyo"],
    ["South Korea" , "Seoul"],
    ["Indonesia" , "Jakarta" ],
    ];
    console.log(countries [0][1]); // Tokyo
    console.log(countries [1][0]); // South Korea
    console.log(countries [2]); // [Indonesia, Jakarta]
    console.log(countries .length); // 3
    console.log(countries [1].length); // 2