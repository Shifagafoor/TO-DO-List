const inputBox = document.querySelector("#input-box") ;
console.log(inputBox)
const listContainer = document.querySelector("#list-container");
console.log(listContainer)
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        inputBox.value ='';
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
