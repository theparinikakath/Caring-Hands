const sampleListings = [
    {
        name: "Alice Johnson",
        age: 32,
        location: "Mumbai, India",
        itemsGiven: 3,
        itemsReceived: 1,
        phone: 9876543210,
        image: { 
            filename: "listingimage", 
            url: "https://plus.unsplash.com/premium_photo-1671031352777-d4d30ca211aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXMlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D" 
        },
    },
    {
        name: "Bob Smith",
        age: 45,
        location: "New York, USA",
        itemsGiven: 10,
        itemsReceived: 2,
        phone: 1234567890,
        image: { 
            filename: "listingimage", 
            url: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXMlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D" 
        },
    },
    {
        name: "Carlos Mendoza",
        age: 29,
        location: "Madrid, Spain",
        itemsGiven: 7,
        itemsReceived: 0,
        phone: 4567891230,
        image: { 
            filename: "listingimage", 
            url: "https://plus.unsplash.com/premium_photo-1669532597232-e540bc04b657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlcyUyMGRvbmF0aW9ufGVufDB8fDB8fHww" 
        },
    },
    {
        name: "Deepa Singh",
        age: 38,
        location: "Delhi, India",
        itemsGiven: 4,
        itemsReceived: 3,
        phone: 8765432109,
        image: { 
            filename: "listingimage", 
            url: "https://plus.unsplash.com/premium_photo-1671031352777-d4d30ca211aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXMlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D" 
        },
    },
    {
        name: "Emma Thompson",
        age: 26,
        location: "Sydney, Australia",
        itemsGiven: 5,
        itemsReceived: 0,
        phone: 6574893210,
        image: { 
            filename: "listingimage", 
            url: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXMlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D" 
        },
    },
    {
        name: "Fahad Khan",
        age: 41,
        location: "Dubai, UAE",
        itemsGiven: 8,
        itemsReceived: 1,
        phone: 9873216540,
        image: { 
            filename: "listingimage", 
            url: "https://media.istockphoto.com/id/1283154274/photo/woman-holding-cardboard-donation-box-full-with-folded-clothes.jpg?s=612x612&w=0&k=20&c=bqJFhv_hRXV3Milqrmuh54eyIiScjgqP6z0iwnnT84I=" 
        },
    },
    {
        name: "Giovanni Russo",
        age: 35,
        location: "Rome, Italy",
        itemsGiven: 6,
        itemsReceived: 0,
        phone: 2345678910,
        image: { 
            filename: "listingimage", 
            url: "https://www.shutterstock.com/image-photo/donate-clothing-needs-donations-those-600nw-2472651435.jpg" 
        },
    },
    {
        name: "Hannah Lee",
        age: 28,
        location: "Seoul, South Korea",
        itemsGiven: 9,
        itemsReceived: 2,
        phone: 1239874560,
        image: { 
            filename: "listingimage", 
            url: "https://images.unsplash.com/photo-1669532673647-b1185ea1a594?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlcyUyMGRvbmF0aW9ufGVufDB8fDB8fHww" 
        },
    },
    {
        name: "Ibrahim Ahmed",
        age: 30,
        location: "Cairo, Egypt",
        itemsGiven: 12,
        itemsReceived: 0,
        phone: 8976543201,
        image: { 
            filename: "listingimage", 
            url: "https://images.unsplash.com/photo-1669532673647-b1185ea1a594?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlcyUyMGRvbmF0aW9ufGVufDB8fDB8fHww" 
        },
    },
    {
        name: "Jennifer Miller",
        age: 27,
        location: "Toronto, Canada",
        itemsGiven: 4,
        itemsReceived: 1,
        phone: 5678901234,
        image: { 
            filename: "listingimage", 
            url: "https://media.istockphoto.com/id/1283154274/photo/woman-holding-cardboard-donation-box-full-with-folded-clothes.jpg?s=612x612&w=0&k=20&c=bqJFhv_hRXV3Milqrmuh54eyIiScjgqP6z0iwnnT84I=" 
        },
    },
    {
        name: "Kenji Nakamura",
        age: 36,
        location: "Tokyo, Japan",
        itemsGiven: 3,
        itemsReceived: 3,
        phone: 8765432101,
        image: { 
            filename: "listingimage", 
            url: "https://images.unsplash.com/photo-1669532673647-b1185ea1a594?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlcyUyMGRvbmF0aW9ufGVufDB8fDB8fHww" 
        },
    },
    {
        name: "Lara Schmidt",
        age: 33,
        location: "Berlin, Germany",
        itemsGiven: 11,
        itemsReceived: 0,
        phone: 2345678911,
        image: { 
            filename: "listingimage", 
            url: "https://plus.unsplash.com/premium_photo-1671031352777-d4d30ca211aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXMlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D" 
        },
    },
    {
        name: "Manuel Garcia",
        age: 42,
        location: "Mexico City, Mexico",
        itemsGiven: 5,
        itemsReceived: 4,
        phone: 7891234560,
        image: { 
            filename: "listingimage", 
            url: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXMlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D" 
        },
    },
    {
        name: "Natalie Brooks",
        age: 24,
        location: "Auckland, New Zealand",
        itemsGiven: 6,
        itemsReceived: 1,
        phone: 1234567898,
        image: { 
            filename: "listingimage", 
            url: "https://plus.unsplash.com/premium_photo-1671031352777-d4d30ca211aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXMlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D" 
        },
    }
];

module.exports = { data: sampleListings };
