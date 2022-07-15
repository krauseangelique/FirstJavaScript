/*
   7.Gemini (optional & hard)
I give you this two arrays :

let studentCoursesA = ['Math', 'English', 'Programming'];
let studentCoursesB = ['Geography', 'Spanish', 'Programming'];
Find a way to compare it and if there any common words, console.log them.
    
*/



// Variables declaration
let studentCoursesA = ['Math', 'English', 'Programming'];
let studentCoursesB = ['Geography', 'Spanish', 'Programming'];

// Data processing Developement
/*
// normal array concat() method
let arr = [1,2,3];
let arr2 = [4,5];
  
arr = arr.concat(arr2);
  
console.log(arr); // [ 1, 2, 3, 4, 5 ]

*/

/* reduce , elipsis spread operator and rest */




// Display of results: Output


const commoneWord = studentCoursesA.filter(element => studentCoursesB.includes(element));
console.log(commoneWord);


let commonWord = (firstArray, secondArray) => {
    let compareArray = firstArray.filter((word) => secondArray.includes(word));
    console.log(compareArray);

};
commonWord(studentCoursesA, studentCoursesB);
/* return
['Programming']0: "Programming"length: 1[[Prototype]]: Array(0)
*/
   




