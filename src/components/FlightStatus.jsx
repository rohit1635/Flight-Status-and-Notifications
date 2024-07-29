import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FlightStatus.css';

const FlightStatus = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/flights')
      .then(response => {
        setFlights(response.data);
        console.log('Number of flights:', response.data.length);
      })
      .catch(error => console.error('Error fetching flight data:', error));
  }, []);

  return (
    <div className="container">
      
      <div className="flight-info">
        {flights.length ? (
          flights.map(flight => (
            <div 
              key={flight.flight_id}
              className="card"
            >
              <div className="card-header">
                <div className="flight-id">{flight.flight_id}</div>
                <div className={`flight-status ${flight.status === 'On Time' ? 'status-on-time' : 'status-delayed'}`}>
                  {flight.status}
                </div>
              </div>
              <div className="card-content">
                <div className="flight-info-column">
                  <h3 className="dep">Departure</h3>
                  <div className="flight-info-row">
                    <div ><b>Scheduled:</b></div>
                    <div>{flight.scheduled_departure}</div>
                  </div>
                  <div className="flight-info-row">
                    <div><b>Actual:</b></div>
                    <div>{flight.actual_departure}</div>
                  </div>
                  <div className="gate">
                    <div>Gate</div>
                    <div>{flight.departure_gate}</div>
                  </div>
                </div>
                <div className="flight-info-column">
                  <h3 className="dep">Arrival</h3>
                  <div className="flight-info-row">
                    <div><b>Scheduled:</b></div>
                    <div>{flight.scheduled_arrival}</div>
                  </div>
                  <div className="flight-info-row">
                    <div><b>Actual:</b></div>
                    <div>{flight.actual_arrival}</div>
                  </div>
                  <div className="gate">
                    <div>Gate</div>
                    <div>{flight.arrival_gate}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No flight data available.</div>
        )}
      </div>
    </div>
  );
};

export default FlightStatus;
