import { Trash, Check } from 'phosphor-react';
import styles from './List.module.css';

interface ItemProps {
    content: String;
}

export function ListItems({content}: ItemProps) {
    
    return (
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox" >
                    <input readOnly type="checkbox" checked={false}/>
                    <span className={styles.checkbox}>
                        <Check size={12} />
                    </span>

                    <p>{content}</p>
                </label>
            </div>

            <button>
                <Trash size={16} />
            </button>
        </div>
    )
}