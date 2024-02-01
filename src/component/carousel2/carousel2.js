import React, { useState } from 'react';
import styles from './page.module.css';
import BookCard2 from '../card2/card2';

const CarouselSecond = () => {

    const bookData = [
        {
            image: "/images/img1.png",
            title: "Crack the Code",
            rating: "4.3",

            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and ... ",
            price: "7,500",
            prevPrice: "8,600"

        },
        {
            image: "/images/img2.png",
            title: "Sunset kiss",
            rating: "4.6",
            tags: [
                "Biograpgh",
                "Racism",
                "Western"
            ],
            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and ... ",
            price: "12,500",
            prevPrice: "8,600"

        },
        {
            image: "/images/img3.png",
            title: "Say you'll be mine",
            rating: "4.6",
            tags: [
                "Biograpgh",
                "Racism",
                "Western"
            ],
            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and ... ",
            price: "9,000",
            prevPrice: "8,600"

        },
        {
            image: "/images/img2.png",
            title: "Say you'll be mine",
            rating: "4.6",
            tags: [
                "Biograpgh",
                "Racism",
                "Western"
            ],
            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and ... ",
            price: "9,000",
            prevPrice: "8,600"

        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bookData.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + bookData.length) % bookData.length);
    };




    return (
        <div className={styles.carousel_container}>
            <div className={styles.carousel}>
                {bookData.map((book, index) => (
                    <div
                        key={index}
                        className={index === currentIndex ? styles.slideActive : styles.slideInactive}
                        style={{
                            transform: `translateX(${(index - currentIndex) * (100 / 4)}%)`, // Divide by the number of items to show
                            flex: `0 0 calc(100% / 4 - 16px)`, // Adjust width based on the number of items
                            marginRight: index !== bookData.length - 1 ? '16px' : '0', // Add margin between items
                        }}
                    >
                        <BookCard2 {...book} />
                    </div>
                ))}
            </div>


            <div className={styles.controls}>
                <button className={styles.button} onClick={prevImage}>
                    <img src='/images/G200.png' alt='prev' />
                </button>
                <button className={styles.button} onClick={nextImage}>
                    <img src='/images/G201.png' alt='next' />
                </button>
            </div>
        </div>
    );
};

export default CarouselSecond;
