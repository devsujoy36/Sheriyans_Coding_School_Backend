// Fundamentals of JavaScript;
// arrays and objects
// function return
// async js coding 
// forEach map filter find indexOf

let arr = [1, 2, 3, 4, 5]

let forEachArr = arr.forEach(function (val) {
    console.log(val)
})

let mapArr = arr.map(function (val) {
    return val
})

let filterArr = arr.filter(function (val) {
    if (val > 3) { return true; } else { return false; }
})

let findArr = arr.find(function (val) {
    if (val === 3) { return val; }
})

arr.indexOf(2)
arr.length()


// objects key value pairs
const student = {
    name: "Sujoy Das",
    roll: 672736,
    dept: "CST",
    account: 5000
}

student.name;
student['name']

Object.freeze(student) 
// freeze korle value change hobe na 






