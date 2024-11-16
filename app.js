let button = document.querySelector(".btn");
let color;
button.addEventListener("click",function(){
   let head = document.querySelector("h1");
   let c =fun();
   head.innerText = c;
  
   let back = document.querySelector(".box");
  back.style.backgroundColor = c;
});

function fun(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
     color = `rgb(${r},${g},${b})`;
    return color;
   
};
let btn = document.querySelector(".copy");
btn.addEventListener("click",function(){
    navigator.clipboard.writeText(color)
    .then(()=>{
        console.log("color is copied");
    })
});
