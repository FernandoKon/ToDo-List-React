import { Header } from './components/Header';
import { Task } from './components/Task'
import { ListHeader } from './components/TaskList/Header';
import { EmptyList } from './components/TaskList/EmptyList';
import { ListItems } from './components/TaskList/List';

import styles from './App.module.css';
import './global.css';

function App() {
  return (
      <main>
        <Header/>

        <section className={styles.content}>
          <Task/>
          <ListItems content={'Oi'}/>
          <div>
            <ListHeader/>
            <EmptyList/>
          </div>
        </section>
      </main>
  )
}

export default App
