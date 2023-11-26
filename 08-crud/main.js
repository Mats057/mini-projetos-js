const openModal = document.getElementById('cadastrarCliente');
const closeModal = document.getElementById('modalClose');
const modal = document.getElementById('modal');
const inputs = Array.from(document.getElementsByClassName('modal-field'));

const getBanco = () => JSON.parse(localStorage.getItem('users')) ?? [];
const banco = getBanco();

const abrirModal = () => {
    modal.style.opacity = 1;
    modal.style.zIndex = 9999;
}
const fecharModal = () => {
    modal.style.opacity = 0;
    modal.style.zIndex = -1;
}
const clearInputs = () => {
    inputs.forEach(e => {
        e.value = '';
    })
}
const createUser = () => {
    let user = {}
    inputs.forEach(e => {
        user[e.id] = e.value;
    })
    banco.push(user)
    atualizarTela();
    clearInputs();
}

const atualizarTela = () => {
    document.getElementsByTagName('tbody')[0].innerHTML = '';
    localStorage.setItem('users', JSON.stringify(banco));
    banco.forEach((e, id) => {
        const tableItens = document.createElement('tr');
        tableItens.setAttribute('user-id',id)
        tableItens.innerHTML = `<td>${e.nome}</td>
        <td>${e.email}</td>
        <td>${e.celular}</td>
        <td>${e.cidade}</td>
        <td>
        <button type="button" class="button green" onclick="openEditUser(${id})">Editar</button>
        <button type="button" class="button red" onclick="deleteUser(${id})">Excluir</button>
        </td>`
        document.getElementsByTagName('tbody')[0].appendChild(tableItens)
    })
}

const openEditUser = (userId) => {
    document.getElementById('nome').dataset.index = userId
    abrirModal();
    inputs.forEach(e => {
        user = banco[userId]
        e.value = user[e.id];
    })

}
const editUser = () => {
    let userId = document.getElementById('nome').dataset.index;
    inputs.forEach(e => {
        user = banco[userId]
        user[e.id] = e.value;
    })
    atualizarTela();
    clearInputs();
}
const deleteUser = (userId) => {
    banco.splice(userId, 1);
    atualizarTela();
}
openModal.addEventListener('click', () => {
    abrirModal();
})

document.getElementById('cancelar').addEventListener('click', () => {
    fecharModal();
    clearInputs();
})
closeModal.addEventListener('click', () => {
    fecharModal();
})

document.getElementById('salvar').addEventListener('click', () => {
    if(document.getElementById('nome').dataset.index == 'new'){
        createUser();
    }else{
        editUser();
    }
    fecharModal();
})

atualizarTela();







function mask(o, f) {
    setTimeout(function() {
      var v = mphone(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);
  }
  
  function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }