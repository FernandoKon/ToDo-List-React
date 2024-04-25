import styles from './EmptyList.module.css'

import clipboard from '../../assets/Clipboard.png'

export function EmptyList() {
  return (
    <div className={styles.container}>
      <img src={clipboard} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}