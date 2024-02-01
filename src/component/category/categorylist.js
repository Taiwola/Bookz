import styles from "./page.module.css";

const CategoryList = () => {
    return (
        <div className={styles.cat}>
            <h4>Book Categories</h4>

            <div className={styles.cat_grid}>
                <div className={styles.cat_flex}>
                    <div>
                        <ul className={styles.list}>
                            <li><p className={styles.text_list}>Architecture</p></li>
                            <li><p className={styles.text_list}>Love and Romance</p></li>
                            <li><p className={styles.text_list}>Science and Technology</p></li>
                            <li><p className={styles.text_list}>Young Adult</p></li>
                            <li><p className={styles.text_list}>Science Fiction</p></li>
                            <li><p className={styles.text_list}>Children Literature</p></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.list}>
                            <li><p className={styles.text_list}>Biography and Autobiography</p></li>
                            <li><p className={styles.text_list}>Craft and Hobbies</p></li>
                            <li><p className={styles.text_list}>Family and Relationship</p></li>
                            <li><p className={styles.text_list}>Horror</p></li>
                            <li><p className={styles.text_list}>Comedy</p></li>
                            <li><p className={styles.text_list}>Tradition and Culture</p></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.cat_flex}>
                    <div>
                        <ul className={styles.list}>
                            <li><p className={styles.text_list}>Mathematics</p></li>
                            <li><p className={styles.text_list}>Action</p></li>
                            <li><p className={styles.text_list}>Thriller</p></li>
                            <li><p className={styles.text_list}>Sex</p></li>
                            <li><p className={styles.text_list}>Non Fiction</p></li>
                            <li><p className={styles.text_list}>World History</p></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.list}>
                            <li><p className={styles.text_list}>Architecture</p></li>
                            <li><p className={styles.text_list}>Education</p></li>
                            <li><p className={styles.text_list}>Drama</p></li>
                            <li><p className={styles.text_list}>Music</p></li>
                            <li><p className={styles.text_list}>Politics</p></li>
                            <li><p className={styles.text_list}>Religion</p></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.list}>
                            <li><p className={styles.text_list}>Medical</p></li>
                            <li><p className={styles.text_list}>Nature</p></li>
                            <li><p className={styles.text_list}>Anime</p></li>
                            <li><p className={styles.text_list}>Racism</p></li>
                            <li><p className={styles.text_list}>War</p></li>
                            <li><a href="/" className={styles.link}>See more</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryList;