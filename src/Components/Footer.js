import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import FooterLogo from "../littleLemonLogos/Asset 18@4x.png";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-centered">
                <img src={FooterLogo}></img>

                {/* <div className="text-container"> */}
                <section className="footer-section">
                    <h1>Main</h1>
                    <nav>
                    <ul>
                        <li><Link to="/" className="link">HOME</Link></li>
                        <li><Link to="/specials" className="link">MENU</Link></li>
                        <li><Link to="/about" className="link">RESERVATIONS</Link></li>
                        <li><Link to="/contact" className="link">ORDER ONLINE</Link></li>
                        <li><Link to="/menu" className="link">ABOUT</Link></li>
                        <li><Link to="/contact" className="link">LOGIN</Link></li>
                    </ul>
                    </nav>
                </section>

                <section className="footer-section">
                    <h1>Contact</h1>
                    <nav>
                    <ul>
                        <li><a>Address</a></li>
                        <li><a>Phone</a></li>
                        <li><a>Email</a></li>
                    </ul>
                    </nav>
                </section>

                <section className="footer-section">
                    <h1>Social Media</h1>
                    <nav>
                        <ul>
                            <li><a>Instagram</a></li>
                            <li><a>Facebook</a></li>
                        </ul>
                    </nav>
                </section>
                {/* </div> */}

            </div>
        </div>
    )
}

export default Footer;