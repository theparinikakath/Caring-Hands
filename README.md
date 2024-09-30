# Caring Hands - Clothing Donation/Disposal/Recycling Platform
caring-hands.onrender.com/listings
Caring Hands is a platform designed to streamline the donation, recycling, and disposal of old or unused clothing. It aims to foster sustainability and help communities in need by allowing users to easily contribute to a worthy cause. This project utilizes the MERN stack, incorporating Express.js for the backend, React for the frontend, and MongoDB for data storage.

(CHECKOUT THE NEW BRANCH FOR CODE)

## Features
- **MVC framework**: To make the project more readable and accessible for other developers.
- **User Authentication**: Secure login and registration system with validation.
- **Clothing Listings**: Users can add, edit, and delete items they wish to donate.
- **Resource Management**: Manage donations with full CRUD (Create, Read, Update, Delete) operations.
- **About Us Section**: Provides detailed information about the organization’s achievements.
- **Responsive Design**: Ensures compatibility across devices, offering a smooth user experience.
- **Smooth Scrolling**: The hero section arrow scrolls seamlessly to the 'About Us' section.

## Approach
1. **Backend (Express.js)**: Created routes for users to register, login, and manage clothing donation listings. Used middleware for validation and error handling.
2. **Frontend (React)**: Designed a clean, intuitive user interface, incorporating Material UI components for visual consistency. React handles dynamic updates and form submissions.
3. **MongoDB**: Used MongoDB as the database to store user data and donation listings, ensuring efficient querying and scalability.
4. **Routing and Navigation**: Implemented routes to ensure smooth navigation across different pages.
5. **Scrolling Feature**: Linked the hero section’s arrow to smoothly scroll to the About Us section for better UX.

## Installation

1. Clone the repository:
    git clone https://github.com/your-username/caring-hands.git

2. Navigate to the project directory:
    cd caring-hands

3. Install server-side dependencies:
    cd server
    npm install

4. Install client-side dependencies:
    cd ../client
    npm install

## Running the Project

### Running the Backend (Express.js)

1. Navigate to the server directory:
    cd server

2. Start the server:
    npm start

   By default, the server will run on `http://localhost:5000`.

### Running the Frontend (React.js)

1. Navigate to the client directory:
    cd client

2. Start the frontend development server:
    npm start

   By default, the frontend will run on `http://localhost:8080`.

## Technologies Used
- **Frontend**: React, Material UI, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Other Tools**: JWT for authentication, pbkdf2 algorithm for password hashing

## Contributing
Feel free to fork the project and submit pull requests with new features or improvements! 😊😊

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
