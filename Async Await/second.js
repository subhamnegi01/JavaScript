function test1(){
    const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 resolved");
    },5000)
    })
    return p1;
}


function test2(){
    const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 2 resolved");
    },5000)
    })
    return p2;
}

async function greet(){
    const data1 = await test1();
    console.log(data1)

    const data2 = await test2();
    console.log(data2)
}

greet()
console.log("Hello World")
console.log("How are you")