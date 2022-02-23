use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Christopher McKenna",
        email: "ChrisM@gmail.com",
        status: true
    },
    {
        name: "Paola Guerra",
        email: "PaolaG@gmail.com",
        status: true
    },
    {
        name: "Stephen Mck",
        email: "Stephen@gmail.com",
        status: true
    }
]);


