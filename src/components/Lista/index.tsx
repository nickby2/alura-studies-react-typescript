import React from 'react';

function Lista(){
    const tarefas = [{
    tarefa: 'React',
    tempo: '02:00:00'
    },{
    tarefa: 'Javascript',
    tempo: '01:00:00'
    }]
    return(
        <aside>
            <h1>Estudos do dia</h1>
            <ul>
                {tarefas.map((item, index) =>(
                    <li>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;