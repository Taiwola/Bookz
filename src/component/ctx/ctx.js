import styles from "./page.module.css"

const Ctx = () => {
    return (
        <div className={styles.call_body}>
            <div className={styles.call_heading}>
                <h3>Subscribe to our Newsletter for the latest books and updates</h3>
            </div>
            <div className={styles.input}>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Ctx;