import styles from './Header.module.css';

export function ListHeader () {
    return (
        <div className={styles.container}>
            <aside>
                <p>Tarefas criadas</p>
                <span>0</span>
            </aside>

            <aside>
                <p>Concluídas</p>
                <span>0</span>
            </aside>
        </div>
    )
}