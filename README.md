# Project
Project for Debugit Hackathon

# CivicConnect
# Backend Overview
This is a Node.js backend API for user registration, authentication, and civic engagement tracking. It uses Express.js, MongoDB, and Mongoose to manage user data, including personal information, interests, and verification details.

## Features
- User registration
- Email-based user lookup
- Updating civic interests
- Aadhar verification
- MongoDB as the database
- CORS and body-parser middleware

## Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment variables
- cors for cross-origin requests
- body-parser for parsing JSON requests

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the project root and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```sh
   node server.js
   ```
   The server will run on `http://localhost:5000`.

### Running the Website Locally
You can also run the website locally on your computer by downloading the files and following these steps:
1. Download or clone the repository to your local machine.
2. Install all dependencies using:
   ```sh
   npm install
   ```
3. Create a `.env` file in the project root directory if it does not exist.
4. Open the `.env` file and add your MongoDB connection string:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
   Replace `your_mongodb_connection_string` with your actual MongoDB connection URL.
5. Ensure MongoDB is running locally or connected to a remote database.
6. Start the server using:
   ```sh
   node server.js
   ```
7. Open your browser and navigate to `http://localhost:5000` to access the API.
   
## API Endpoints

### User Registration
- **POST** `/api/users`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@example.com",
    "password": "password123",
    "city": "New York",
    "state": "NY",
    "interests": ["Community Service", "Environment"]
  }
  ```
- **Response:**
  ```json
  { "message": "User registered successfully" }
  ```

### Get User by Email
- **GET** `/api/users/:email`
- **Description:** Fetch user details by email.
- **Response:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@example.com",
    "city": "New York",
    "state": "NY",
    "interests": ["Community Service", "Environment"]
  }
  ```

### Update Civic Interests
- **PUT** `/api/users/:email/civic-interests`
- **Description:** Updates user's civic engagement information.
- **Request Body:**
  ```json
  {
    "interests": ["Community Service", "Environment"],
    "participationLevel": "High",
    "communicationPreferences": ["Email", "Phone"],
    "cityCouncilDistrict": "District 5",
    "neighborhood": "Downtown",
    "skills": ["Organizing", "Public Speaking"]
  }
  ```
- **Response:** Updated user object.

### Aadhar Verification
- **POST** `/api/users/:email/verify`
- **Description:** Verifies the user's identity using Aadhar.
- **Request Body:**
  ```json
  {
    "aadhar": "123456789012",
    "phone": "9876543210"
  }
  ```
- **Response:**
  ```json
  { "message": "Verification successful" }
  ```

## Running in Development Mode
For automatic server restarts during development, install `nodemon`:
```sh
npm install -g nodemon
nodemon server.js
```

# Frontend Overview

## Website Structure

The CivicConnect frontend is designed to be user-friendly and intuitive, allowing users to easily navigate through the platform and engage with community-driven initiatives. The website starts from the home page (`1.html`), and subsequent pages (`2.html`, `3.html`, `4.html`) are dedicated to collecting user details and storing them in the database. After completing the initial setup, users can seamlessly explore the platform, interact with the assistant bot, and participate in community activities.

### Key Pages:
1. **Home Page (`1.html`)**  
   - The landing page introduces users to CivicConnect and its features.
   - Provides quick access to registration, login, and community exploration.

2. **User Details Pages (`2.html`, `3.html`, `4.html`)**  
   - These pages collect user information such as personal details, location, and civic interests.
   - Data is securely stored in the database for future use.

3. **Community Page**  
   - A hub for users to explore local projects, initiatives, and governance activities.
   - To provide a rich and interactive experience, the Community Page is powered by an AI-driven bot that responds with different perspectives on civic issues, fostering meaningful discussions and collaboration.

4. **Issues Page**  
   - A dedicated page where users can view and engage with community issues.
   - Government authorities can update issues with proofs (e.g., links to documents, images, or videos) displayed on cards for transparency.

5. **Assistant Bot**  
   - An AI-powered bot that guides users through the platform.
   - Provides real-time assistance, recommendations, and answers to user queries.

---

## About CivicConnect

CivicConnect is an innovative web platform designed to bridge the gap between citizens and their communities by fostering engagement in civic activities. The platform empowers users to register, explore, and participate in community-driven initiatives, local governance, and social causes that align with their interests and skills.

### Key Objectives:
- Enable users to easily register and manage their civic participation.
- Provide a user-friendly interface for exploring community projects.
- Encourage collaboration and knowledge-sharing among citizens.
- Assist users in finding opportunities to contribute to society based on their skills and location.
- Ensure secure user verification through Aadhar authentication.
- Offer an interactive assistant bot for guidance and seamless navigation.
- Allow government authorities to update community issues with proofs for transparency.

### How CivicConnect Works:

#### 1. **User Registration**
   - Users sign up by providing their personal details, location, and interests.
   - A secure database stores user information with hashed credentials for safety.

#### 2. **Profile & Interests Customization**
   - Users can update their profiles with their civic interests, participation level, and skills.
   - The platform suggests relevant community activities based on user preferences.

#### 3. **Community Engagement**
   - Users can explore local projects, community initiatives, and governance activities.
   - The Community Page is powered by an AI-driven bot that provides diverse perspectives on civic issues, encouraging thoughtful discussions and collaboration.

#### 4. **Issues Page**
   - Government authorities can post and update community issues with proofs (e.g., links to documents, images, or videos).
   - Each issue is displayed on a card with details, status, and attached proofs for transparency.
   - Users can view, comment, and engage with the issues.

#### 5. **Verification & Authentication**
   - Aadhar-based identity verification ensures trusted and genuine participation.
   - Users can securely store and update their contact details.

#### 6. **AI-powered Assistant Bot**
   - A built-in assistant guides users in navigating the platform.
   - Users can ask questions, seek recommendations, and get help in real-time.

---

## User Experience

### Navigating the Website
- The website is designed to be intuitive and easy to navigate.
- Users can start by registering on the home page (`1.html`) and proceed to fill in their details on subsequent pages (`2.html`, `3.html`, `4.html`).
- Once registered, users can explore the community page, interact with the assistant bot, and participate in civic activities.

### Community Page
- The Community Page is designed to provide a rich and interactive experience.
- Instead of static content, the page is powered by an AI-driven bot that responds with different perspectives on civic issues.
- Users can ask questions, share their views, and receive well-rounded insights from the bot, fostering meaningful discussions and collaboration.
- This dynamic approach ensures that users are exposed to diverse viewpoints, encouraging critical thinking and informed decision-making.

### Issues Page
- The Issues Page allows government authorities to post and update community issues.
- Each issue is displayed on a card with details such as:
  - Title and description of the issue.
  - Current status (e.g., "In Progress," "Resolved").
  - Proofs (e.g., links to documents, images, or videos) for transparency.
- Users can view the issues, check the attached proofs, and engage by commenting or providing feedback.

### Assistant Bot
- The assistant bot is available throughout the platform to provide guidance and support.
- Users can ask questions, seek recommendations, and get help in real-time.

---

## Technologies Used
- **HTML, CSS, JavaScript**: For building the frontend interface.
- **Bootstrap**: For responsive and modern UI design.
- **AJAX/Fetch API**: For seamless communication with the backend.
- **AI-powered Assistant Bot**: For real-time user guidance and support.

---

## Getting Started with the Frontend

### Running the Website Locally
1. Download or clone the repository to your local machine.
2. Open the `1.html` file in your browser to access the home page.
3. Navigate through the website using the links provided on each page.
4. Use the assistant bot for guidance and explore the community page for civic engagement opportunities.
5. Visit the Issues Page to view and engage with community issues posted by government authorities.

---

## License
This project is licensed under the MIT License.

---

CivicConnect is a step towards a more connected, active, and responsible society. By making civic participation more accessible and engaging, the platform fosters a culture of collective responsibility and positive change. The Community Page, powered by an AI-driven bot, ensures users receive diverse perspectives on civic issues, while the Issues Page promotes transparency and accountability by allowing government authorities to update issues with proofs. Together, these features create a dynamic and inclusive platform for civic engagement.

## Thankyou
