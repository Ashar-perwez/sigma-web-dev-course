console.log('This is promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was supporting you")
    }
    else {
        setTimeout(() => {
            console.log('Yes, I am done');
            resolve("Ashar")

        }, 3000);
    }
})

// prom1.then((a) => {
//   console.log(a);
  
// }
// ).catch((err) => {
//   console.log(err)
// }
// )

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log('Yes, I am done 2');
            resolve("Ashar 2")

        }, 2000);
    }
})

let p3 = Promise.race([prom1,prom2])
p3.then((a) => {
  console.log(a);
  
}
).catch((err) => {
  console.log(err);
  
}
)