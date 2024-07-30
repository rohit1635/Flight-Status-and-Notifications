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

1. **Clone the Repository**

```bash
git clone https://github.com/rohit1635/Flight-Status-and-Notifications.git
cd Flight-Status-and-Notifications
```

2. **Start Kafka**

    Ensure Kafka and Zookeeper are running. Start Zookeeper:

    ```bash
    bin/zookeeper-server-start.sh config/zookeeper.properties
    ```

    Start Kafka:

    ```bash
    bin/kafka-server-start.sh config/server.properties
    ```

3. **Start the Backend Server**

    ```bash
    node index.js
    ```
   **Kafka Integration**

   Run Kafka consumer to handle incoming messages:

    ```bash
    node kafkaConsumer.js
    ```

4. **Start the Frontend Server**

    ```bash
    npm start
    ```

#### API Endpoints

- **Flights API**:
  - `GET /api/flights`: Fetch all flights.
  - `POST /api/flights/update`: Update a flight's details and notifications related to it.
  - `GET /api/notifications`: Fetch all notifications.
  - `POST /api/notifications/send`: send notification to a user using kafka.

- **Notifications API**:
  - `GET /api/notifications`: Fetch all notifications.
  - `POST /api/notifications/send`: Send a notification.

This README file provides an overview of the project, its features, tech stack, and setup instructions to help you get started with the Flight Management and Notification System.
