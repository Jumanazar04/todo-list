const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(input.value);
    const item = document.createElement("li");
    item.classList.add("item")

    const liText = document.createElement("p");
    liText.textContent = input.value;
    item.appendChild(liText);
    
    const itemChild = document.createElement("div");
    itemChild.classList.add("itemChild");

    const editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    editBtn.textContent = 'Ed';
    itemChild.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "Del";
    itemChild.appendChild(deleteBtn);

    item.appendChild(itemChild)
    list.appendChild(item);

    form.reset();
})