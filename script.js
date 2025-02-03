function createGrid(number){
    let squared = number*number;
    for(i=1;i<=squared;i++){
        const item = document.createElement("div");
        let w = container.offsetWidth/number;
        item.textContent = `${i}`;
        item.style.width = `${w}px`;
        item.style.height = "35px";
        item.style.textAlign = "center";
        fragment.appendChild(item);
    }
}
const container = document.querySelector("div");
const fragment = document.createDocumentFragment();
createGrid(16);
container.appendChild(fragment);
container.addEventListener("mouseover", (event)=>{
    event.target.style.background = "blue";
})
let btn = document.createElement("button");
btn.textContent = "button";

btn.addEventListener("click",()=>{
    let num = prompt("number of squares for new grid");
    container.innerHTML = "";
    fragment.innerHTML = "";
    createGrid(num);
    container.appendChild(fragment);
})
document.body.insertBefore(btn,container);