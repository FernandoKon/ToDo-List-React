import {PlusCircle} from 'phosphor-react'
import styles from './Task.module.css';

interface Task {
    content: string;
}

export function Task () {
    return (
        <div className={styles.taskForm}>
            <input 
                name="input" 
                className={styles.taskForm}
                placeholder='Adicione uma nova tarefa'
            />
            <button type='submit'>
                Criar
                <PlusCircle size={16} color="#f2f2f2" weight="bold"/>
            </button>
        </div>
    )
}