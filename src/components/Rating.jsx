import React, { useState } from 'react';
import './Rating.css';
import Card from './Card'



function Rating({ rating, setRating, setShowThankyouPage }) {
    const [activeRatings, setActiveRatings] = useState({
        oneStar: false,
        twoStars: false,
        threeStars: false,
        fourStars: false,
        fiveStars: false,
    });

    const handleSubmit = () => {
        if (!rating) return;

        setShowThankyouPage(true);
    };

    return (
        <Card>
            <div className="star-img-container">
                <img src="/images/icon-star.svg" alt="" />
            </div>
            <h2 className='title'>How did we do?</h2>
            <p className='text'>Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!</p>
            <div className="rating">
                <div
                    className={activeRatings.oneStar
                        ? "rating-container active"
                        : "rating-container"}
                    onClick={() => {
                        setActiveRatings({
                            oneStar: true,
                            twoStars: false,
                            threeStars: false,
                            fourStars: false,
                            fiveStars: false,
                        });
                        setRating(1);
                    } }
                >1
                </div>
                <div
                    className={activeRatings.twoStars
                        ? "rating-container active"
                        : "rating-container"}
                    onClick={() => {
                        setActiveRatings({
                            oneStar: false,
                            twoStars: true,
                            threeStars: false,
                            fourStars: false,
                            fiveStars: false,
                        });
                        setRating(2);
                    } }
                >2
                </div>
                <div
                    className={activeRatings.threeStars
                        ? "rating-container active"
                        : "rating-container"}
                    onClick={() => {
                        setActiveRatings({
                            oneStar: false,
                            twoStars: false,
                            threeStars: true,
                            fourStars: false,
                            fiveStars: false,
                        });
                        setRating(3);
                    } }
                >3
                </div>
                <div
                    className={activeRatings.fourStars
                        ? "rating-container active"
                        : "rating-container"}
                    onClick={() => {
                        setActiveRatings({
                            oneStar: false,
                            twoStars: false,
                            threeStars: false,
                            fourStars: true,
                            fiveStars: false,
                        });
                        setRating(4);
                    } }
                >4
                </div>
                <div
                    className={activeRatings.fiveStars
                        ? "rating-container active"
                        : "rating-container"}
                    onClick={() => {
                        setActiveRatings({
                            oneStar: false,
                            twoStars: false,
                            threeStars: false,
                            fourStars: false,
                            fiveStars: true,
                        });
                        setRating(5);
                    } }
                >5
                </div>
            </div>
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        </Card>
    );
}

export default Rating
