import React, { useState } from "react";
import restaurantImage from "../assets/slider/Diseño sin título (39).png";
import { Button, Form, Col } from "react-bootstrap";

function ReservationForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  // Variables de estado usando useState para almacenar valores del form
  function handleSubmit(event) {
    event.preventDefault();
    // Aquí puedes enviar la información de la reserva a un servidor o guardarla localmente
  }

  return (
    <section className="reservation-page">
      <h2 className="h2-incio text-center mb-5">Reserva de hora</h2>
      <Col>
        <Col>
          <Form className="reservation-form" onSubmit={handleSubmit}>
            <div className="reservation-description">
              <h2>Reserva una mesa en nuestro restaurante</h2>
              <p>
                Estamos emocionados de tenerte como nuestro invitado. Por favor,
                completa el formulario a continuación para reservar una mesa en
                nuestro restaurante.
              </p>
            </div>
            <Form.Group className="form-group">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Numero de personas:</Form.Label>
              <Form.Control
                type="number"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Fecha:</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Hora:</Form.Label>
              <Form.Control
                type="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="reserva-button">
              Reservar
            </Button>
          </Form>
        </Col>
        <Col>
          <div className="restaurant-image">
            <img
              src={restaurantImage}
              alt="Restaurante"
              className="reserva-img"
            />
          </div>
        </Col>
      </Col>
    </section>
  );
}

export default ReservationForm;
