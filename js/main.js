const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelector("form");
const list = document.querySelector("#lists");



form.addEventListener("submit",addItem);

function addItem(e){
    e.preventDefault();


    let newItem = itemInput.value;
    let li = document.createElement("li");
    li.className="list-group-item d-flex animate__bounceInRight";
    li.style ="animation-duration: 1s;"
    li.appendChild(document.createTextNode(newItem));
    
    
    let exitBtn = document.createElement("bx");
    exitBtn.className="bx bx-x bx-close";

    li.appendChild(exitBtn)    
    console.log(li);

    list.appendChild(li);
    itemInput.value="";


    exitBtn.addEventListener("click", ()=> {
        li.remove();
    })
}
