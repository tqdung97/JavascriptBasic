const btnGroupEl = document.querySelector(".buttons-group");

btnGroupEl.addEventListener("click", (event)=>{
    const clickTarget = event.target;
    if(clickTarget.classList.contains("buttons-group")) {
        return;
    }
    console.log(clickTarget.textContent);
});