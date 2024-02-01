import styles from "./page.module.css"
import { Star } from "lucide-react"

const BookCard2 = ({ image, title, rating, description, price, prevPrice }) => {
    return (
        <div className={styles.card_body}>
            <div className={styles.book_image_container}>
                <img src={image} alt={title} className={styles.book_image} />
            </div>

            <div className={styles.book_card}>
                <div className={styles.book_details}>
                    <div className={styles.book_content}>
                        <h2 className={styles.book_title}>{title}</h2>
                        <p className={styles.book_rating}> <Star className={styles.star} /> <span>
                            {rating}
                        </span> </p>
                    </div>
                    <div className={styles.book_description}>
                        <p className={styles.book_description}>{description}</p>
                    </div>
                    <div className={styles.book_footer}>
                        <div>
                            <a href="/" className={styles.btn}>Buy now</a>
                        </div>
                        <div className={styles.book_prices}>
                            <p className={styles.current_price}>${price}</p>
                            <p className={styles.prev_price}>${prevPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard2