import {useState} from "react";
import { postBooking } from "./BookingService";

const BookingsForm = ({addBooking}) => {
    
    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postBooking(formData).then((data)=>{
            addBooking(data);
        })
    }

    return (
        <form onSubmit={onSubmit} id="bookings-form" >
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input onChange={onChange} type="text" id="name"  />
            </div>
            <div className="formWrap">
                <label htmlFor="email">email:</label>
                <input onChange={onChange} type="text" id="email"  />
            </div>
            <div className="formWrap">
                <label htmlFor="date">Checked in?:</label>
                <input onChange={onChange} type="checkbox" checked={true} id="status"  />
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>

    );
}

export default BookingsForm;