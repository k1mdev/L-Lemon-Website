import React from 'react';
import './HomePage.css';
import Button from '../Components/Button';
import SpecialCard from '../Components/SpecialCard';
import { useNavigate } from 'react-router-dom';
import HeroImg from "../littleLemonLogos2/restauranfood.jpg";
import SaladImg from "../littleLemonLogos2/greek salad.jpg";
import BruschettaImg from "../littleLemonLogos2/bruchetta.svg";
import LemonCakeImg from "../littleLemonLogos2/lemon dessert.jpg";
import BroPic2 from "../littleLemonLogos2/Mario and Adrian B.jpg";



function HomePage() {

    const navigate = useNavigate();



    return (
        <div className="main">
            <article id="banner">
                <div className='centered'>
                    <div className="text-container">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Button text="Book Online" path="/reservations" />
                    </div>
                    <img src={HeroImg} />
                </div>
            </article>

            <div className='centered'>
                <article id="specials">
                    <div className="header">
                        <h1>Specials</h1>
                        <Button text="Online Menu" path="/" />
                    </div>
                    <div className="card-banner">
                        <SpecialCard image={SaladImg} title="Greek Salad" price="$12.99" description="Bursting with freshness and vibrant colors, this classic dish is a harmonious blend of crisp cucumber, juicy tomatoes, briny Kalamata olives, and creamy feta cheese, all artfully tossed in our house-made Greek dressing." />
                        <SpecialCard image={BruschettaImg} title="Bruschetta" price="$5.99" description="Served atop toasted artisanal bread and garnished with a drizzle of balsamic glaze, this classic appetizer tantalizes the taste buds with its delightful blend of tangy-sweet tomato and fragrant herbs." />
                        <SpecialCard image={LemonCakeImg} title="Lemon Cake" price="$5.00" description="Delight in a moist, lemon-infused sponge generously layered with velvety lemon cream, topped with a luscious lemon glaze. A true celebration of vibrant citrus flavors that dance on the palate." />
                    </div>
                </article>

                <article id="about">
                    <div className="text-container">
                        <h1>About Us</h1>
                        <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. Mario relies on family recipes and his experience as a chef in Italy to craft the menu while Adrian leads in marketing.</p>
                    </div>
                    <img src={BroPic2}></img>
                </article>
            </div>
        </div>
    );
}

export default HomePage;