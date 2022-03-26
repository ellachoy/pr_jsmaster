// 문자열타입
let string = 'holla hoola';
string = `holihola`; //``
console.log(string);


// 특수 문자 출력하는법
string ="'hallo!'";
console.log(string);
string = '안녕!\n엘리야!\t\t내 이름은\\\u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal) ``

let id = 'ella';
let greetings = "'안녕!, " + id + "✋\n즐거운 하루 보내요!'";
console.log(greetings);

greetings =` 'hallo, ${id} have a nice day!`;
console.log(greetings);