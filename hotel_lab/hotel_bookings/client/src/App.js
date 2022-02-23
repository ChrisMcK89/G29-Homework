import { useState, useEffect } from "react";
import './App.css';
import { getBookings } from "./BookingService";
import BookingsGrid from "./BookingsGrid";

function App() {

  const [hotelBookings, setHotelBookings] = useState([])

  useEffect(() => {
    getBookings().then((allBookings) => {
      setHotelBookings(allBookings)
    })
  }, []);

  return (
    <>
    <div className="App">
      <h1>Hotel Bookings</h1>
      <BookingsGrid hotelBookings={hotelBookings}/>
    </div>
    </>
  );
}

export default App;
