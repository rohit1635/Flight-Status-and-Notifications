import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import './NotificationPanel.css';

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/notifications')
      .then(response => setNotifications(response.data))
      .catch(error => console.error('Error fetching notification data:', error));
  }, []);

  const handleSendNotification = (notification) => {
    axios.post('http://localhost:3001/api/notifications/send', notification)
      .then(response => {
        console.log(response.data.message);
        alert(`Notification ${notification.notification_id} sent successfully!`); 
      })
      .catch(error => console.error('Error sending notification:', error));
  };

  return (
    <div className="notification-container">
      <div className="notification-cards">
        {notifications.map(notification => (
          <div
            key={notification.notification_id}
            className="notification-card"
          >
            <div className="card-content">
              <div>
                <div>
              <div className="notification-row">
                <div className="notification-id">Notification {notification.notification_id}</div>
                <div className="notification-flight">Flight: {notification.flight_id}</div>
              </div>
              </div>
              <div>
              <div className="notification-row">
                <div className="notification-message">{notification.message}</div>
              </div>
              </div>
              </div>
              <div className="notification-row">
                <div className="notification-method">Method: {notification.method}</div>
                <div className="notification-recipient">Recipient: {notification.recipient}</div>
                <Button className="custom-button" size="small" onClick={() => handleSendNotification(notification)}>Send Notification</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;
