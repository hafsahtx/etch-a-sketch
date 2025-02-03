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
let btn = document.createElement("button");
btn.textContent = "button";

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
document.body.insertBefore(btn,container);