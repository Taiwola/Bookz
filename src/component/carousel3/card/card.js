import styles from "./page.module.css";

const Card3 = ({ image, description, name, rating, profession }) => {
    return (
        <>
            <div className={styles.card_body}>
                <div className={styles.img_container}>
                    <img src={image} alt={name} className={styles.img_body} />
                </div>

                <div className={styles.card_content}>
                    <p>{description}</p>

                    <div className={styles.card_para}>
                        <div className={styles.card_h}>
                            <p>{name} <span>{profession}</span></p>
                        </div>
                        <div className={styles.card_rating}>
                            <img src="/images/vector.png" alt="vector" />
                            <p>{rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card3