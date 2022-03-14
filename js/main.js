const itemInput = document.querySelector('#adder');
const form = document.querySelector("form");
const list = document.querySelector("#lists");



form.addEventListener("submit",addItem);

function addItem(e){
    e.preventDefault();


    let newItem = itemInput.value;
    let li = document.createElement("li");
    li.className="list-group-item d-flex animate__bounceInRight";
    li.style ="animation-duration: 1s;"
    // let elP = document.createElement("p");
    li.innerHTML = `<p>${newItem}</p>`
    // elP.appendChild(document.createTextNode(newItem));
    // li.appendChild(elP);
    
    
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

const search = document.querySelector("#search");

search.addEventListener("keyup",filterItems);

function filterItems(e) {
    let text = e.target.value.toLowerCase();
    let items = list.getElementsByTagName("li");

    for (let i = 0; i < Array.from(items).length; i++) {
        let itemName = items[i].textContent;
        if (itemName.toLocaleLowerCase().indexOf(text) !=-1) {
            items[i].className="list-group-item d-flex animate__bounceInRight";
        }else{
            items[i].className="list-group-item d-none animate__bounceInRight";
        }
    }
}