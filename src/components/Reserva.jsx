import React, { useState } from "react";
import restaurantImage from "../assets/slider/pexels-bonus-studio-5488052.jpg";
import { Button } from "react-bootstrap";

function ReservationForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Aquí puedes enviar la información de la reserva a un servidor o guardarla localmente
  }

  return (
    <div className="reservation-page">
      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="reservation-description">
          <h2>Reserva una mesa en nuestro restaurante</h2>
          <p>
            Estamos emocionados de tenerte como nuestro invitado. Por favor,
            completa el formulario a continuación para reservar una mesa en
            nuestro restaurante.
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="name-input">Nombre:</label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name-input">Numero de personas:</label>
          <input
            id="number-input"
            type="number"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date-input">Fecha:</label>
          <input
            id="date-input"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time-input">Hora:</label>
          <input
            id="time-input"
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </div>
        <Button variant="primary" type="submit" className="reserva-button">
          Reservar
        </Button>
      </form>

      <div className="restaurant-image">
        <img src={restaurantImage} alt="Restaurante" className="resrva-img" />
      </div>
    </div>
  );
}

export default ReservationForm;
