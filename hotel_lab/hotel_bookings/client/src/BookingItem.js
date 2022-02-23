const BookingItem = ({booking}) => {

    let status = booking.status


    return(
        <div className="booking-item">
            <h2>{booking.name}</h2>
            <h3>{booking.email}</h3>
            
        </div>
    )
}

export default BookingItem;