const baseURL = 'http://localhost:5000/api/bookings'

export const getBookings = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

// 'http://localhost:5000/api/bookings'
// const getBookings = () => {
//     return fetch('http://localhost:5000/api/bookings')
//         .then(res => res.json())
