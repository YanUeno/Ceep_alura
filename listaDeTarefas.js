import BotaoConclui from './Componentes/concluirTarefa.js';
import BotaoDeleta from "./Componentes/deletarTarefa.js";

const criartarefa = (evento)=>{
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const texto = input.value;
    
    const tarefa = document.createElement('li');
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${texto}</p>`;
    
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    input.value="";
     
}

const novatarefa = document.querySelector('[data-form-button]');
novatarefa.addEventListener('click', criartarefa);
    