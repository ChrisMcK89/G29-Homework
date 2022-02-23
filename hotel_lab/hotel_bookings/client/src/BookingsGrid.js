import BookingItem from "./BookingItem";

const BookingsGrid = ({hotelBookings}) => {
    const bookingsList = hotelBookings.map((booking) => {
        return <BookingItem booking = {booking} key={booking._id} />
    });


return (
    <div className="bookings-grid">
    <ul>
        <li>{bookingsList}</li>
    </ul>
    </div>
)
}

export default BookingsGrid;