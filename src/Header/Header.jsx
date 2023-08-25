import styles from '../Header/Header.module.css'

function Header() {
  

  return (
    <>
    <div className={styles.container_Header}>
        <div className={styles.container_Logo}>Prova API pública</div>
        <div className={styles.container_Itens}>
            <ul className={styles.itens}>
           
            </ul>
        </div>
    </div>

    </>
  )
}

export default Header
