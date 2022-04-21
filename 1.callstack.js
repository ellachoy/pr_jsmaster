function a(){
    for (let i = 0; i < 
        100000; i++);
    return 1;
}
console.log(a);
function b(){
    return  a() +1;
}
console.log(b);
function c(){
    return  b() +1;
}
console.log(c);

console.log('시작했다!');
const result = c();

console.log(result);