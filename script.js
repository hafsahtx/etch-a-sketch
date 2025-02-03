function createGrid(number){
    let squared = number*number;
    for(i=1;i<=squared;i++){
        const item = document.createElement("div");
        let w = container.offsetWidth/number;
        item.style.width = `${w}px`;
        item.style.height = "35px";
        item.style.flexGrow = 1;
        fragment.appendChild(item);
    }
}
function colorGenerator(){
    let color = Math.floor(Math.random() * 256);
    return color;
}
let div = document.createElement("div");
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.height = "100px";
let btn = document.createElement("button");
btn.textContent = "button";
btn.style.padding = "8px 16px";
btn.style.fontSize = "16px";
btn.style.borderRadius = "12px";
btn.addEventListener("click",()=>{
    let num = prompt("number of squares for new grid");
    if(num<=100){
        container.innerHTML = "";
        fragment.innerHTML = "";
        createGrid(num);
        container.appendChild(fragment);
    }else{
        alert("Only input a number less than 100");
    }
})
div.appendChild(btn);
const container = document.querySelector("div");
const fragment = document.createDocumentFragment();
createGrid(16);
container.appendChild(fragment);
container.addEventListener("mouseover", (event)=>{
    let r = colorGenerator();
    let g = colorGenerator();
    let b = colorGenerator();
    event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
})
document.body.insertBefore(div,container);