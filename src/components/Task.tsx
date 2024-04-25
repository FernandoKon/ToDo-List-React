import {PlusCircle} from 'phosphor-react'
import styles from './Task.module.css';

interface Task {
    content: string;
}

export function Task () {
    function handleNewTask () {
        
    }


    return (
        <div className={styles.taskForm}>
            <input 
                className={styles.taskForm}
                placeholder='Adicione uma nova tarefa'
            />
            <button type='submit' onClick={handleNewTask}>
                Criar
                <PlusCircle size={16} color="#f2f2f2" weight="bold"/>
            </button>
        </div>
    )
}