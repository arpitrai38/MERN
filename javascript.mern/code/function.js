// function sum(a,b,c){
//     return a+b+c;
// }
// function call(c){
//     console.log(c);
// }
// call(sum(4,5,6))



// function ch(){
//     console.log("ch function");
    
// }
// function call(c){
//     c();
// }
// call(ch)



// const a = function(){
//     console.log("I am Arpit rai")
// }
// a()



// let a = [1,2,3,4,5,6,7,8,9]
// let b = [10,2,3,4,5,5,6,66,7,7]
// let c = [...a,...b]
// console.log(c)



function sum(...a){
    let s = 0;
    a.forEach((b)=>{
        s = s+b;
    })
    // console.log(a);
    console.log(s);
}


sum(1,2,3,4,5,6,7,8,9)