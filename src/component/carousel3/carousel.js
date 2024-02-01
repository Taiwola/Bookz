import Card3 from "./card/card";
import styles from "./page.module.css";
import { useState } from "react"

const CarouselThird = () => {
    const [currentIndex, setCurrentSlide] = useState(0);

    const testimonialData = [
        {
            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference interested in exploring themes",
            name: "Adumeta Chinedu",
            profession: "Ui Designer, Apple Inc",
            rating: "4.5",
            image: '/images/userimg1.png'
        },
        {
            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference interested in exploring themes",
            name: "Alisha Gazel",
            profession: "UX Writer, Google",
            rating: "4.5",
            image: '/images/userimg2.png'
        },

        {
            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference interested in exploring themes",
            name: "Sheriff Baba T",
            profession: "Front end Developer AirBnB",
            rating: "4.5",
            image: '/images/userimg3.png'
        },
    ]

    const prevImage = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonialData.length - 1 : prevSlide - 1));
    };

    const nextImage = () => {
        setCurrentSlide((prevSlide) => (prevSlide === testimonialData.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className={styles.carousel_third}>
            <h2>Hear from our Happy Readers</h2>

            <div className={styles.c}>
                {
                    testimonialData.map((data, index) => (
                        <div key={index} className={index === currentIndex ? styles.slideActive : styles.slideInactive}
                            style={{
                                transform: `translateX(${(index - currentIndex) * (100 / 4)}%)`, // Divide by the number of items to show
                                flex: `0 0 calc(100% / 4 - 16px)`, // Adjust width based on the number of items
                                marginRight: index !== testimonialData.length - 1 ? '16px' : '0', // Add margin between items
                            }}>
                            <Card3 image={data.image} description={data.description}
                                name={data.name}
                                profession={data.profession}
                                rating={data.rating}
                            />
                        </div>
                    ))
                }
            </div>

            <div className={styles.controls}>
                <button className={styles.button} onClick={prevImage}>
                    <img src='/images/G200.png' alt="prev" />
                </button>
                <button className={styles.button} onClick={nextImage}>
                    <img src='/images/G201.png' alt="next" />
                </button>
            </div>
        </div>
    )

}

export default CarouselThird