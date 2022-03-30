// 사용예제 1
// function add(num1,num2) {
//     const result= num1+num2;
//     return result;
// }
// add(1,2);
// console.log(add(1,2));
function add(num1,num2) {
      
        return num1 + num2;
    }
let result= add(1,2);
console.log(result);


// 사용예제 2
function fullName(firstName,lastName) {
    return ` ${firstName} ${lastName}`;
}
let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName,lastName));
// let fullName = `${lastName} ${firstName}`;
// console.log(fullName);
let lastName2 = '박';
let firstName2 = '철수';
// let fullName2 = `${lastName2} ${firstName2}`;
// console.log(fullName2);
console.log(fullName(firstName2,lastName2));