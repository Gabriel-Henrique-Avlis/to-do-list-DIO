function addTask(){
    let text = document.getElementById('task');
    if(text.value.length > 0){
        let idLabel = '';
        let idInput = '';
        let tarefas = document.getElementsByClassName('tarefas-input');
        let tarefa = document.getElementById('tarefas');

        if(tarefas.length == 0){
            idLabel = 'tarefa-0';
            idInput = 'input-0';
        } else{
            tarefa.appendChild(document.createElement('br'));
            idLabel = 'tarefa-' + tarefas.length;
            idInput = 'input-' + tarefas.length;
        }
                    
        let descricao = document.createElement('label');
        let chkbox = document.createElement('input');

        chkbox.type = 'checkbox';
        chkbox.className = 'tarefas-input';
        chkbox.id = idInput;
        chkbox.setAttribute('onclick','checkTask(this)'); 

        descricao.innerText = text.value;
        descricao.id = idLabel;

        tarefa.appendChild(chkbox);
        tarefa.appendChild(descricao);
        text.value = '';
    }
}

function checkTask(check){
    console.log(check.checked)
    let id = 'tarefa-' + check.id.split('-')[1];
    let tarefa = document.getElementById(id);

    if(check.checked)
        tarefa.style.textDecoration = 'line-through';
    else
        tarefa.style.textDecoration = 'none';
}