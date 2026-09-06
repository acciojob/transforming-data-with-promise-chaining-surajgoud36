//your JS code here. If required.
let arr=[1,2,3,4];
const outputEle = document.getElementById("output");
const button = document.getElementById("btn");
const inputEle = document.getElementById("number");
button.addEventListener("click",async ()=>{
    const raw = inputEle.value.trim();
    if(raw === ""){
        outputEle.innerHTML = `<h3>Output:</h3><p>Please enter a number.</p>`;
        return;
    }
    let val = Number(raw);
    if(Number.isNaN(val)){
        outputEle.innerHTML = `<h3>Output:</h3><p>"${raw}" is not a valid number.</p>`;
        return;
    }
    outputEle.innerHTML = `<h3>Output:</h3><p>Loading...</p>`;
    await display(2000);
    outputEle.innerHTML = `<h3>Output:</h3><p>Result: ${val}</p>`;

    await display(2000);
    val=val*2;
    outputEle.innerHTML = `<h3>Output:</h3><p>Result: ${val}</p>`;

    await display(1000);
    val=val-3;
    outputEle.innerHTML = `<h3>Output:</h3><p>Result: ${val}</p>`;

    await display(1000);
    val=val/2;
    outputEle.innerHTML = `<h3>Output:</h3><p>Result: ${val}</p>`;

    await display(1000);
    val=val+10;
    outputEle.innerHTML = `<h3>Output:</h3><p>Final Result: ${val}</p>`;

});
function display(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },time)
    })
}
// window.addEventListener('DOMContentLoaded',async (e)=>{
//     outputEle.textContent="Retrieving data...";
//     outputEle.textContent= await getData();
//     await sleep(1000);
//     outputEle.textContent="Filtering even numbers ... ";
//     outputEle.textContent= await filterEven();

//     await sleep(1000);

//     outputEle.textContent = "multiplying by two ....";
//     outputEle.textContent = await multiplyByTwo();
// })

// function multiplyByTwo(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             arr=arr.map(e=>e*2);
//             resolve(`[${arr}]`);
//         },3000)
//     })
// }

// function getData(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(`[${arr}]`);
//         },3000);
//     })
// }

// function filterEven(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             arr=arr.filter(e=>e%2===0);
//             resolve(`[${arr}]`);
//         },1000)
//     })
   
   
// }

// function sleep(time){
//     return new Promise(res=>setTimeout(res,time));
// }