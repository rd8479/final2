const option={
    markToday:true,
    markHolidays:true,
    forceFarsiDigits:true
}
kamaDatepicker('todo-date',option)



const input = document.getElementById("todo-text");
const inputDate=document.getElementById("todo-date")
const todosData = JSON.parse(localStorage.getItem("todos"))
const todos = todosData || [];
let editableitemId = null;
const date=new Date()
const converter = (text) => text.replace(/[٠-٩۰-۹]/g,a=>a.charCodeAt(0)&15);
inputDate.value=converter(date.toLocaleDateString("fa-IR"));
function handleAddTodo() {

    const inputVal = input.value;
    const dateVal=inputDate.value;
    if (inputVal&&dateVal) {
        const newTodo = {
            id: todos.length > 0 ? todos.at(-1).id + 1 : 1,
            text: inputVal,
            isDone: false,
            date:dateVal
        }

        todos.push(newTodo)
        input.value = ""
        
        // renderTodos()
    }
}
function changeVal(evt){
    if(evt.keyCode!==104){
        if((input.value.length+1)%145===0 &&((input.value.length+1)/145)>2&&((input.value.length+1)/145)<7){
            input.style.height=`${((input.value.length+1)/145)*3+5}vh`
        }
    }
    else{
        input.style.height=`${2*3+5}vh`
    }
}
// function renderTodos() {

//     localStorage.setItem("todos", JSON.stringify(todos));

//     const template = todos.map(item => {
//         return `
//         <li id="${item.id}" style="color:red">
//             <input onchange="handleChangeCheckbox(this,${item.id})" type="checkbox" ${item.isDone ? "checked" : ""} />
//             ${item.id === editableitemId ? `<input id="editInput" value="${item.title}" />` : `<span>${item.title}</span>`}
//             <button onclick="deleteItem(${item.id})">delete</button>
//             ${item.id === editableitemId ? `<button onclick="saveEdit()">save</button>` : `<button onclick="editItem(${item.id})">edit</button>`}
            
//         </li>
//         `
//     })

//     const temp = template.join("")

//     root.innerHTML = temp
// }

// renderTodos()

// function handleChangeCheckbox(element, id) {
//     const foundIndex = todos.findIndex(item => item.id === id);

//     todos[foundIndex].isDone = element.checked;
//     renderTodos();
// }

// function saveEdit() {
//     const editInputValue = document.getElementById("editInput").value;

//     if (editInputValue) {
//         const foundIndex = todos.findIndex(item => item.id === editableitemId);
//         todos[foundIndex].title = editInputValue;
//     }

//     editableitemId = null;

//     renderTodos();

// }

// function editItem(id) {
//     editableitemId = id;
//     renderTodos();
// }


// function deleteItem(itemId) {
//     const foundIndex = todos.findIndex(item => item.id === itemId);

//     todos.splice(foundIndex, 1);

//     renderTodos();

// }

// function handleKeyPress(evt) {
//     if (evt.key === "Enter") {
//         handleAddTodo();
//     }
// }

// input.addEventListener("keypress", handleKeyPress)