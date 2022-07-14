/*
   7.Gemini (optional & hard)
I give you this two arrays :

let studentCoursesA = ['Math', 'English', 'Programming'];
let studentCoursesB = ['Geography', 'Spanish', 'Programming'];
Find a way to compare it and if there any common words, console.log them.
    
*/

/*
let arr = [];

const obj = {name: 'Tom'};

arr.push(obj);

console.log(arr); // 👉️ [{name: 'Tom'}]
*/

// Variables declaration
let studentCoursesA = ['Math', 'English', 'Programming'];
let studentCoursesB = ['Geography', 'Spanish', 'Programming'];

// Data processing Developement
//let enteriesStudentCourses = push.studentCoursesA + push.studentCoursesB ;
//arr. push({name: 'Tom'})
let enteriesStudentCourses = [];

//enteriesStudentCourses.push(studentCoursesB, studentCoursesA);

studentCoursesA.push(studentCoursesB);

/* reduce , elipsis spread operator and rest */
/*
var object = { 'a': 1 };
var other = { 'a': 1 };
 
_.isEqual(object, other);
// => true
 
object === other;
// => false

*/
enteriesStudentCourses.forEach(studentCoursesA[0], studentCoursesB[0]) => {
    if (_.isEqual(studentCoursesA[0],studentCoursesB[0])){
        return enteriesStudentCourses[0];
    }
}


// Display of results: Output
console.log(studentCoursesA);
console.log(enteriesStudentCourses);




   




