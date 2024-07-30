# Flight Status and Notifications

#### Project Overview

The Flight Management and Notification System is a comprehensive solution designed to manage flights and send notifications to users. The system supports various notification methods including email, SMS, and app push notifications using Firebase Cloud Messaging.

#### Tech Stack

- **Backend**: Node.js, Express.js
  - Handles API requests, database operations, and notification logic.
- **Frontend**: React
  - Provides a user interface for managing flights and notifications.
- **Database**: MySQL
  - Stores flight information and notifications.
- **Notifications**: Firebase Cloud Messaging
  - Sends real-time push notifications to users' devices.
- **Other Tools**: Axios (for HTTP requests), MUI (for UI components)

#### Features

- **Flight Management**:
  - Add new flights
  - Update flight status (On Time, Delayed, Cancelled)
  - Update departure and arrival gates
- **Notifications**:
  - Send notifications to users via email, SMS, or app push notifications
  - Store notifications in the database for tracking and auditing
  - Real-time notifications using Firebase Cloud Messaging

#### System Design

1. **Backend**:
   - **Express.js**: Handles API routes for flights and notifications.
   - **MySQL**: Database for storing flight and notification data.
   - **Firebase Admin SDK**: Manages sending push notifications to the Firebase Cloud Messaging service.

2. **Frontend**:
   - **React**: Single-page application providing user interfaces for managing flights and notifications.
   - **Axios**: Used for making HTTP requests to the backend API.
   - **MUI**: Provides a set of UI components for building a responsive and modern interface.

3. **Database**:
   - **Flights Table**: Stores information about flights including flight ID, status, departure/arrival times, and gates.
   - **Notifications Table**: Stores information about notifications including notification ID, flight ID, message, method, and recipient.

#### Setup Instructions

Follow the steps in the README file to set up the backend, frontend, and Firebase configuration.

#### API Endpoints

- **Flights API**:
  - `GET /api/flights`: Fetch all flights.
  - `POST /api/flights`: Add a new flight.
  - `PUT /api/flights/:id`: Update a flight's details.
  - `DELETE /api/flights/:id`: Delete a flight.

- **Notifications API**:
  - `GET /api/notifications`: Fetch all notifications.
  - `POST /api/notifications/send`: Send a notification.

#### Future Improvements

- Implement Kafka for scalable notification processing.
- Add authentication and authorization for secure access.
- Enhance the user interface with more features and better design.

This documentation provides an overview of the project, its features, tech stack, and setup instructions to help you get started with the Flight Management and Notification System. For detailed instructions, refer to the README file.
