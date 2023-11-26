const input = document.getElementById("todoInput");

const getBanco = () => JSON.parse(localStorage.getItem('todoList') ?? []);
const banco = getBanco();

localStorage.getItem(0)
const criarTodo = (title, status, indice) => {
  const todo = document.createElement("label");
  todo.classList.add("todo__item");
  todo.setAttribute('data-indice',indice)
  todo.innerHTML = `<input type="checkbox" ${status} onclick="saveCheck(${indice})">
    <div>${title}</div>
    <input type="button" value="x" onclick="excluirTodo(${indice})">`;
  document.getElementById("todoList").appendChild(todo);
};

document.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && input.value.trim().length != 0) {
    let titleTodo = input.value;
    banco.push({tarefa: titleTodo, status: ""});
    atualizarTela()
    input.value = '';
  }
});

const atualizarTela = () => {
    document.getElementById("todoList").innerHTML = '';
    localStorage.setItem('todoList', JSON.stringify(banco))
    banco.forEach((e, indice) => criarTodo(e.tarefa,e.status, indice));
}

const excluirTodo = (indice) => {
    banco.splice(indice, 1);
    atualizarTela();
}

const saveCheck = (indice) => {
    if(banco[indice].status == "checked"){
        banco[indice].status = "";
    }
    else{
        banco[indice].status = "checked"
    }
    atualizarTela();
}
atualizarTela();