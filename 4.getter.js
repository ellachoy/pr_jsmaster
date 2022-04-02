// 접근자 프로퍼티 (Accessor Property)

class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
  get fullName() {
        return `${this.lastName} ${this.firstName}`;
      }
   set fullName(value) {
        console.log('set', value);
      }       
}

const student = new Student('ella', 'choy');
console.log(student.firstName);
console.log(student.lastName);
// console.log(student.fullName());
console.log(student.fullName);
student.fullName ='Fabian Backhaus';
