const option={
    markToday:true,
    markHolidays:true,
    forceFarsiDigits:true
}
kamaDatepicker('todo-date',option)

const root=document.getElementById("section")
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
        
        filterData()
    }
}
function changeVal(evt){
    if(evt.keyCode!==104){
        if((input.value.length+1)%141===0 &&((input.value.length+1)/141)>2&&((input.value.length+1)/141)<7){
            input.style.height=`${((input.value.length+1)/141)*3+5}vh`
            console.log(((input.value.length+1)/141)*3+5)
        }
    }
    else{
        input.style.height=`${2*3+5}vh`
    }
}
function erasTextArea(){
    input.value=""
    input.style.height='9vh'
}
function failPlaceholder(){
    input.removeAttribute('placeholder')
}
function renderTodos(date) {
    localStorage.setItem("todos", JSON.stringify(todos));

    const template = date.map(item => {
        return `
        <li id="${item.id}">
            <input onchange="handleChangeCheckbox(this,${item.id})" type="checkbox" ${item.isDone ? "checked" : ""} />
            ${item.id === editableitemId ? `<input id="editInput" value="${item.text}" />` : `<span>${item.text}</span>`}
            <button onclick="deleteItem(${item.id})">delete</button>
            ${item.id === editableitemId ? `<button onclick="saveEdit()">save</button>` : `<button onclick="editItem(${item.id})">edit</button>`}
            
        </li>
        `
    }).join("")
    root.innerHTML=template
}
filterData()
function handleChangeCheckbox(element, id) {
    const foundIndex = todos.findIndex(item => item.id === id);

    todos[foundIndex].isDone = element.checked;
    filterData();
}

function saveEdit() {
    const editInputValue = document.getElementById("editInput").value;

    if (editInputValue) {
        const foundIndex = todos.findIndex(item => item.id === editableitemId);
        todos[foundIndex].title = editInputValue;
    }

    editableitemId = null;

    filterData();

}

function editItem(id) {
    editableitemId = id;
    filterData();
}


function deleteItem(itemId) {
    const foundIndex = todos.findIndex(item => item.id === itemId);

    todos.splice(foundIndex, 1);

    filterData();

}
function filterData(){
    const test=todos
    fil=test.filter(item=>{
        return item.date===inputDate.value
    })
    renderTodos(fil)
}