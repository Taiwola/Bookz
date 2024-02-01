import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import BookCard from '../card/card1';

const Carousel = () => {

    const bookData = [
        {
            image: "/images/crack.png",
            title: "Crack the Code",
            rating: "4.3",
            tags: [
                "Biograpgh",
                "Racism",
                "Western"
            ],
            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference",
            price: "7,500",
            prevPrice: "8,600"

        },
        {
            image: "/images/sunset.png",
            title: "Sunset kiss",
            rating: "4.6",
            tags: [
                "Biograpgh",
                "Racism",
                "Western"
            ],
            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference",
            price: "12,500",
            prevPrice: "8,600"

        },
        {
            image: "/images/say.png",
            title: "Say you'll be mine",
            rating: "4.6",
            tags: [
                "Biograpgh",
                "Racism",
                "Western"
            ],
            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference",
            price: "9,000",
            prevPrice: "8,600"

        },
        {
            image: "/images/say.png",
            title: "Say you'll be mine",
            rating: "4.6",
            tags: [
                "Biograpgh",
                "Racism",
                "Western"
            ],
            description: "A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference",
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
                {bookData.map((book, index) => {
                    return (
                        <div key={index} className={index === currentIndex ? styles.slideActive : styles.slideInactive}
                            style={{ transform: `translateX(${(index - currentIndex) * 33.33}%)` }}
                        >
                            <BookCard  {...book} />
                        </div>
                    )
                })}
            </div>


            <div className={styles.controls}>
                <button className={styles.button} onClick={prevImage}>
                    <img src='/images/G200.png' />
                </button>
                <button className={styles.button} onClick={nextImage}>
                    <img src='/images/G201.png' />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
