const inputBox = document.querySelector("#input-box") ;
const listContainer = document.querySelector("#list-container");
console.log(inputBox)
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        li.addEventListener("click", () => {
            li.classList.toggle("checked")
        } )
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        span.addEventListener("click", () => {
            span.parentElement.remove(span)
        })

        li.appendChild(span);
    }
}