let button = document.querySelector(".btn");
button.addEventListener("click",function(){
   let head = document.querySelector("h1");
   let c =fun();
   head.innerText = c;
  
   let back = document.querySelector(".box");
  back.style.backgroundColor =c;
});

function fun(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let color = `rgb(${r},${g},${b})`;
    return color;
   
};
