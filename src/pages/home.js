// Home.jsx

import React from "react";
import Button from "../component/button/button";
import Carousel from "../component/carousel/carouselComponent";
import CarouselSecond from "../component/carousel2/carousel2";
import CarouselThird from "../component/carousel3/carousel";
import Ctx from "../component/ctx/ctx";
import CategoryList from "../component/category/categorylist";

const Home = () => {
    return (
        <section className="section">
            <main>
                <div className="container">
                    <div className="hero">
                        <div className="hero_content">
                            <h1>
                                Encounter a Wealth of Books and Inspiration
                            </h1>
                            <p>
                                We believe that reading is a powerful tool for personal growth and enrichment, and we're excited to help you discover your next favorite read. So come on in and start exploring the wealth of books and inspiration that awaits you!
                            </p>
                            <div>
                                <Button name="Buy now" link="/" />
                            </div>
                        </div>
                        <div className="hero_img">
                            <img src="/images/book_reading.png" alt="..." />
                        </div>
                    </div>

                    {/* banner */}
                    <div className="banner">
                        <h1>Best Sellers</h1>
                        <p>A must read book for anyone who  exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference</p>
                    </div>

                    {/* carousel */}
                    <div className="carosel">
                        <Carousel />
                    </div>
                </div>
                {/* offers */}
                <div className="offers">
                    <div className="container">
                        <div className="offer_container">
                            <div className="offer_content">
                                <div className="offer_img">
                                    <img src="/images/bolt2.png" />
                                </div>
                                <h2>
                                    Fast Delivery
                                </h2>
                                <p>
                                    A must read book for anyone who is exploring philosophical ideas through a comelling an
                                </p>
                            </div>

                            <div className="offer_content">
                                <div className="offer_img">
                                    <img src="/images/thumb2.png" />
                                </div>
                                <h2>
                                    Best Quality
                                </h2>
                                <p>
                                    A must read book for anyone who is exploring philosophical ideas through a comelling an
                                </p>
                            </div>

                            <div className="offer_content">
                                <div className="offer_img">
                                    <img src="/images/secure2.png" />
                                </div>
                                <h2>
                                    Secured Payment
                                </h2>
                                <p>
                                    A must read book for anyone who is exploring philosophical ideas through a comelling an
                                </p>
                            </div>
                            <div className="offer_content">
                                <div className="offer_img">
                                    <img src="/images/star.png" />
                                </div>
                                <h2>
                                    Best Ratings
                                </h2>
                                <p>
                                    A must read book for anyone who is exploring philosophical ideas through a comelling an
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* special offers */}
                <div className="container">
                    <div className="carosel">
                        <CarouselSecond />
                    </div>
                </div>

                {/* favourite */}
                <div className="container">
                    <div className="favourites">
                        <div className="favourite-img">
                            <img src="/images/books.png" />
                        </div>
                        <div className="favourite_content">
                            <h1>Find your next favorite read from our carefully curated book collection.</h1>
                            <p>We believe that reading is a powerful tool for personal growth and enrichment, and we're excited to help you discover your next favorite read. So come on in and start exploring the wealth of books and inspiration that awaits you!</p>
                            <div className="fav_btn">
                                <Button name="Buy now" link="/" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* acknowledgement */}
                <div className="container">
                    <div className="acknowledgement">
                        <CarouselThird />
                    </div>
                </div>

                {/* call to action */}
                <div className="ctx">
                    <Ctx />
                </div>

                {/* categories */}

                <div className="categories">
                    <CategoryList />
                </div>

                <hr className="visible" />
            </main>
        </section>
    );
}

export default Home;
