# Flight Status and Notifications

#### Project Overview

The Flight Management and Notification System is a comprehensive solution designed to manage flights and send notifications to users. The system supports various notification methods including SMS, Email using Kafka. 
#### Tech Stack

- **Backend**: Node.js, Express.js
  - Handles API requests, database operations, and notification logic.
- **Frontend**: React
  - Provides a user interface for managing flights and notifications.
- **Database**: MySQL
  - Stores flight information and notifications.
- **Notifications**: Kafka
  - Sends notifications to users through SMS or Email.

#### Features

- **Flight Management**:
  - Update flight status (On Time, Delayed, Cancelled)
  - Update departure and arrival gates
- **Notifications**:
  - Send notifications to users via Email, SMS using Kafka
  - Store notifications in the database for tracking and auditing

#### System Design

1. **Backend**:
   - **Express.js**: Handles API routes for flights and notifications.
   - **MySQL**: Database for storing flight and notification data.

2. **Frontend**:
   - **React**: Single-page application providing user interfaces for managing flights and notifications.
   - **Axios**: Used for making HTTP requests to the backend API.
     
3. **Database**:
   - **Flights Table**: Stores information about flights including flight ID, status, departure/arrival times, and gates.
   - **Notifications Table**: Stores information about notifications including notification ID, flight ID, message, method, and recipient.

#### Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/project-name.git
cd project-name
```

1. **Navigate to the Backend Directory**

    ```bash
    cd backend
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Create and Configure .env File**

    Copy `.env.example` to `.env` and update the file with your MySQL and Firebase credentials:

    ```bash
    cp .env.example .env
    ```

    `.env.example`:

    ```env
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=1234
    MYSQL_DATABASE=flight
    FIREBASE_API_KEY=your_firebase_api_key
    FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    FIREBASE_PROJECT_ID=your_firebase_project_id
    FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    FIREBASE_APP_ID=your_firebase_app_id
    VAPID_KEY=your_vapid_key
    ```

4. **Start MySQL Server**

    Ensure your MySQL server is running.

5. **Start Kafka**

    Ensure Kafka and Zookeeper are running. Start Zookeeper:

    ```bash
    bin/zookeeper-server-start.sh config/zookeeper.properties
    ```

    Start Kafka:

    ```bash
    bin/kafka-server-start.sh config/server.properties
    ```

6. **Create Kafka Topics**

    ```bash
    bin/kafka-topics.sh --create --topic notifications --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1
    ```

7. **Start the Backend Server**

    ```bash
    npm start
    ```

## Frontend Setup

1. **Navigate to the Frontend Directory**

    ```bash
    cd ../frontend
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Start the Frontend Server**

    ```bash
    npm start
    ```

## Firebase Setup

1. **Generate Firebase Service Account Key**

    - Go to the Firebase Console.
    - Navigate to Project Settings > Service Accounts.
    - Click "Generate New Private Key" and download the JSON file.
    - Save the file in your backend directory and rename it to `firebase-service-account.json`.

2. **Update Firebase Configuration**

    Ensure your Firebase configuration in the `.env` file matches your Firebase project's settings.

## Kafka Integration

1. **Kafka Producer Configuration**

    Ensure your Kafka producer script (`kafkaProducer.js`) is configured to send messages to the Kafka topic.

2. **Kafka Consumer Configuration**

    Create and run a Kafka consumer to handle incoming messages:

    ```bash
    node kafkaConsumer.js
    ```

## Running Tests

1. **Backend Tests**

    ```bash
    cd backend
    npm test
    ```

2. **Frontend Tests**

    ```bash
    cd ../frontend
    npm test
    ```

## Deployment

Instructions for deploying the project (e.g., on Heroku, AWS) can be added here.

#### API Endpoints

- **Flights API**:
  - `GET /api/flights`: Fetch all flights.
  - `POST /api/flights`: Add a new flight.
  - `PUT /api/flights/:id`: Update a flight's details.
  - `DELETE /api/flights/:id`: Delete a flight.

- **Notifications API**:
  - `GET /api/notifications`: Fetch all notifications.
  - `POST /api/notifications/send`: Send a notification.

This README file provides an overview of the project, its features, tech stack, and setup instructions to help you get started with the Flight Management and Notification System.
