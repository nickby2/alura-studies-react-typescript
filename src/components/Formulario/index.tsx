import React from 'react';
import Botao from '../Botao';
import './style.scss';

class Formulario extends React.Component {
    render(){
        return(
            <form className='novaTarefa'>
                <div className='inputContainer'>
                    <label>
                        terefa
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        placeholder="O que você quer estudar"
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <label>
                        tempo
                    </label>
                    <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
                </div>
                <Botao />
            </form>
        )
    }
}

export default Formulario;