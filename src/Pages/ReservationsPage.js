import React, { useReducer, useState } from "react";
import "./ReservationsPage.css";
import BookingForm from "../Components/BookingForm";
import { fetchAPI, submitAPI } from "../API";
import BookingImg from "../littleLemonLogos2/restaurant.jpg";



function ReservationsPage() {


    const updateTimes = selectedDate => {
        return fetchAPI(selectedDate);
    }


    const initializeTimes = () => {
        return fetchAPI(new Date());
    };
    

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());


    

    return (
        <div className="reservationsPage">
            <div className="bookingBanner">
                <div className="centered-booking">
                    <h1>Reservations</h1>
                    <img src={BookingImg} />
                    <p>Skip the queue and book a reservation in advance using the form below.</p>
                </div>
            </div>
            <BookingForm
                    availableTimes={availableTimes}    
                    updateTimes={dispatch}
            />
        </div>
    );
}

export default ReservationsPage;