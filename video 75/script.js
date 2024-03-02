console.log("Ashar is a hacker");
console.log("Harry is a hecker");

setTimeout(()=>{
    console.log("I am inside settimeout");
},0);
console.log("The End");

setTimeout(()=>{
    console.log("I am inside settimeout toooo");
},0);

const callback =(arg) => {
  console.log(arg);
}

// const loadScript =(src, callback) => {
//   let sc = document.createElement("script");
//   sc.src = src;
//   sc.onload = callback("Harry");
//   document.head.append(sc)
// }
// loadScript()

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry");
    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )