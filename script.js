const container = document.querySelector("div");
for(i=1;i<=256;i++){
    const item = document.createElement("div");
    let w = container.clientWidth/16;
    item.textContent = `${i}`;
    item.style.width = "78px";
    item.style.height = "35px";
    item.style.border = "1px solid black";
    item.style.textAlign = "center";
    container.appendChild(item);

}
container.addEventListener("mouseover", (event)=>{
    event.target.style.background = "blue";
})

document.body.insertBefore(btn,container);