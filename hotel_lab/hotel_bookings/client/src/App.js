import { useState, useEffect } from "react";
import './App.css';
import { getBookings } from "./BookingService";
import BookingsGrid from "./BookingsGrid";
import BookingsForm from "./BookingsForm";

function App() {

  const [hotelBookings, setHotelBookings] = useState([])

  useEffect(() => {
    getBookings().then((allBookings) => {
      setHotelBookings(allBookings)
    })
  }, []);

  const addBooking = (booking) =>{
    const temp = hotelBookings.map(s =>s);
    temp.push(booking);
    setHotelBookings(temp);
  }

  return (
    <>
    <div className="App">
      <h1>Hotel Bookings</h1>
      <BookingsGrid hotelBookings={hotelBookings}/>
      <BookingsForm addBooking={addBooking}/>
    </div>
    </>
  );
}

export default App;
