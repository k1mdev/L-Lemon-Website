import React from "react";
import './ConfirmedBooking.css';
import BookingImg from "../littleLemonLogos2/restaurant.jpg";


function ConfirmedBooking() {
    return (
        
        <div className="confirmationPage">
            <div className="confirmationBanner">
                <div className="centered-confirmation">
                    <h1>Reservations</h1>
                    <img src={BookingImg} />
                    <p>Your booking has been confirmed. We look forward to seeing you!</p>
                </div>
            </div>
        </div>
    )
}

export default ConfirmedBooking;