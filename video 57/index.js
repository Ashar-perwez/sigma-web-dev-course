console.log("I am a tutorial on loops")

let a=1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for(let i=0; i<100; i++){
//     console.log(a+i);
// }

let obj = {
    name : "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}

for(const c of "Harry"){
    console.log(c)
}

for(const key in obj){
    console.log(key)
}
for(const value in obj){
    console.log(value)
}

// let i =10;
// while(i<60){
//     console.log(i)
//     i++;
// }

let i=10;
do{
    console.log(i)
    i++;
}while(i<6);
