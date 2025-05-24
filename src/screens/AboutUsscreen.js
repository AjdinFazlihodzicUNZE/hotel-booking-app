import React from 'react';
import './AboutUsscreen.css';
import oldHotelImage from '../oldhotel.jpg';
import { useNavigate } from 'react-router-dom';

function AboutUsscreen() {
    const navigate = useNavigate();

    return (
        <div className="about-container">
            <div className='blur-background'>
                <h1>About Hotel Royale</h1>
                <p>
                    Nestled in the heart of Istanbul, <strong>Hotel Royale</strong> stands as a timeless symbol of elegance and tradition.
                    Founded in the early 20th century, our hotel has hosted travelers, artists, and dignitaries from all over the world.
                    What once began as a quaint guesthouse has grown into a luxurious retreat, blending Ottoman charm with modern comfort.
                </p>

                <img
                    src={oldHotelImage}
                    alt="Historic view of Hotel Royale"
                    className="about-image"
                />

                <p>
                    From the moment you step through our grand doors, you’re transported into a world where history lives on through our walls, décor, and service.
                    Whether you’re enjoying Turkish tea in our marble courtyard or watching the sunset from our rooftop terrace, Hotel Royale offers an experience that is both luxurious and authentically Istanbul.
                </p>

                <h2 className="section-title">Our Journey Through Time</h2>
                <ul className="timeline">
                    <li><strong>1923:</strong> Hotel Royale opens in the heart of old Istanbul, welcoming merchants and travelers.</li>
                    <li><strong>1955:</strong> Becomes a favorite for diplomats and artists visiting the city.</li>
                    <li><strong>1980:</strong> Major restoration preserving Ottoman-Baroque details while modernizing rooms.</li>
                    <li><strong>2005:</strong> Earns distinction as Istanbul's premier boutique heritage hotel.</li>
                    <li><strong>2023:</strong> Celebrates 100 years of hospitality with new luxury upgrades and cultural exhibitions.</li>
                </ul>

                <p>
                    Every corridor of Hotel Royale whispers stories of generations past — handwritten letters found behind old drawers, chandeliers restored from their original 1920s brass, and books left behind by guests who found inspiration in Istanbul’s magic.
                </p>

                <p>
                    Our staff, many of whom have been with us for decades, carry forward the Royale legacy with warm smiles and dedicated service. They are not just employees — they are keepers of tradition, storytellers, and silent witnesses to unforgettable moments.
                </p>

                <p>
                    Guests return year after year, some booking the same rooms their grandparents once stayed in. These walls have seen engagements, anniversaries, reunions — and even a few novels started under the soft glow of our reading lamps.
                </p>

                <p>
                    Today, Hotel Royale remains a peaceful oasis amid the vibrant energy of Istanbul. Whether you are here for business, leisure, or nostalgia, we invite you to become part of our living story.
                </p>

                <p>
                    Welcome to more than a hotel. Welcome to history, elegance, and home — welcome to Hotel Royale.
                </p>

                <div className="contact-button-container">
                    <button className="btn btn-luxury" onClick={() => navigate('/contact')}>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutUsscreen;
