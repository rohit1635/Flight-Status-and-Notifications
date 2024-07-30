import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FlightStatus.css';

const FlightStatus = () => {
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [status, setStatus] = useState('');
  const [departureGate, setDepartureGate] = useState('');
  const [arrivalGate, setArrivalGate] = useState('');
  const [newDepartureTime, setNewDepartureTime] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/flights')
      .then(response => {
        setFlights(response.data);
        console.log('Number of flights:', response.data.length);
      })
      .catch(error => console.error('Error fetching flight data:', error));
  }, []);

  const handleUpdate = () => {
    if (!selectedFlight) return;

    const data = {
      flight_id: selectedFlight,
      status,
      departure_gate: departureGate,
      arrival_gate: arrivalGate
    };

    if (status === 'Delayed') {
      data.new_departure_time = newDepartureTime;
    }

    axios.post('http://localhost:3001/api/flights/update', data)
    .then(response => {
      console.log(response.data);
      alert(`Notification for ${selectedFlight} sent successfully!`); 
      // Refresh the flight data
      axios.get('http://localhost:3001/api/flights')
        .then(response => {
          setFlights(response.data);
          console.log('Number of flights:', response.data.length);
        })
        .catch(error => console.error('Error fetching flight data:', error));
    })
    .catch(error => console.error('Error updating flight data:', error));
  };

  return (
    <div className="container">
      <div className="update-form">
        <h2>Update Flight</h2>
        <select value={selectedFlight} onChange={e => setSelectedFlight(e.target.value)}>
          <option value="">Select Flight</option>
          {flights.map(flight => (
            <option key={flight.flight_id} value={flight.flight_id}>
              {flight.flight_id}
            </option>
          ))}
        </select>
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="">Select Status</option>
          <option value="On Time">On Time</option>
          <option value="Delayed">Delayed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        {status === 'Delayed' && (
          <input
            type="datetime-local"
            placeholder="New Departure Time"
            value={newDepartureTime}
            onChange={e => setNewDepartureTime(e.target.value)}
          />
        )}
        <input
          type="text"
          placeholder="Departure Gate"
          value={departureGate}
          onChange={e => setDepartureGate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Arrival Gate"
          value={arrivalGate}
          onChange={e => setArrivalGate(e.target.value)}
        />
        <button onClick={handleUpdate}>Update Flight</button>
      </div>

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
