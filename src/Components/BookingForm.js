import React, { useState } from "react";
import "./BookingForm.css";
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from "../API"
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";


function BookingForm(props) {

    const [newAvailableTimes, setNewAvailableTimes] = useState(props.availableTimes.map((time, index) => <option key={index}>{time}</option>));


    const [name, setName] = useState("");
    const handleChangeName = e => {
        e.preventDefault();
        setName(e.target.value);
    };

    const [date, setDate] = useState(new Date());
    const handleChangeDate = e => {
        e.preventDefault();
        setDate(e.target.value);
        props.updateTimes(new Date(e.target.value));
        setNewAvailableTimes(props.availableTimes.map((time) => <option>{time}</option>));
    };

    const [time, setTime] = useState("17:00");
    const handleChangeTime = e => {
        e.preventDefault();
        setTime(e.target.value);
    };

    const [guests, setGuests] = useState("1");
    const handleChangeGuests = e => {
        e.preventDefault();
        setGuests(e.target.value);
    };

    const [occasion, setOccasion] = useState("Birthday");
    const handleChangeOccasion = e => {
        e.preventDefault();
        setOccasion(e.target.value);
    };

    const formData = {
        name,
        date,
        time,
        guests,
        occasion
    };



    const navigate = useNavigate();

    const submitForm = e => {
        e.preventDefault();
        const response = submitAPI(formData);
        console.log("Submit Form Response:", response);
        if (response === true) {
            navigate("/reservations/confirmation");
        };
    }
    
    
    const formik = useFormik({
        initialValues: {
            resName: "",
          resDate: new Date(),
          resTime: "",
          guests: 1,
          occasion: "",
        },
        onSubmit: async (values, {resetForm}) => {
            const response = await submitAPI(formData);
            console.log("Formik Submit Response:", response);
            if (response === true) {
                navigate("/reservations/confirmation");
            }
        },
        validationSchema: Yup.object({
            resName: Yup.string().required("Name is required"),
          resDate: Yup.date().min(new Date(), "Please choose a valid date").required("Date is required"),
          resTime: Yup.string().required("Time is required"),
          guests: Yup.number().required("Number of people is required").min(1, "Minimum 1 person is required"),
          occasion: Yup.string().required("Occasion is required"),
        }),
    });


    return (
        <form className="form" onSubmit={submitForm}>
            <div className="column-container">
                <div className="inputs">
                    <div className="inputGroup">
                    <label htmlFor="resName">Name</label>
                    <input type="text" id="resName" onChange={handleChangeName} {...formik.getFieldProps('resName')} required/>
                    </div>

                    <div className="inputGroup">
                    <label htmlFor="resDate">Choose date</label>
                    <input type="date" id="resDate" onChange={handleChangeDate} {...formik.getFieldProps('resDate')} />
                    </div>

                    <div className="inputGroup">
                    <label htmlFor="resTime">Choose time</label>
                    <select id="resTime" onChange={handleChangeTime} {...formik.getFieldProps('resTime')} >
                        {newAvailableTimes}
                    </select>
                    </div>

                    <div className="inputGroup">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleChangeGuests} {...formik.getFieldProps('guests')} />
                    </div>

                    <div className="inputGroup">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" onChange={handleChangeOccasion} {...formik.getFieldProps('occasion')} >
                        <option>Birthday</option>
                        <option>Party</option>
                        <option>Date</option>
                        <option>Engagement</option>
                    </select>
                    </div>
                </div>

                <div className="text">
                    <div className="hoursGroup">
                    <h2>Mon - Thurs</h2>
                    <p>11:30pm - 9:00pm</p>
                    </div>

                    <div className="hoursGroup">
                    <h2>Fri - Sat</h2>
                    <p>11:30pm - 10:00pm</p>
                    </div>

                    <div className="hoursGroup">
                    <h2>Sun</h2>
                    <p>12:30 - 9:00pm</p>
                    </div>
                </div>
            </div>
            <button type="submit" >Make Your reservation</button>
        </form>
    );
}

export default BookingForm;