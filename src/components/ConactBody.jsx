import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoicGFzY2FsY29ycmVhIiwiYSI6ImNsZ3dubHZ6dTBkYmQzY29kZmdnZDFtMDIifQ.iBA1x5Nx7MvBU6Qi4MOvDA";

function ContactBody() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-70.558975);
  const [lat] = useState(-33.387303);
  const [zoom] = useState(14);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    // Agregar marcador
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current);

    // Crear popup
    const popup = new mapboxgl.Popup({ closeOnClick: false })
      .setHTML("<h3>¡Hola! Este es mi popup.</h3>")
      .addTo(map.current);

    // Mostrar popup al hacer clic en el marcador
    new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(map.current);
  });

  return (
    <Container className="my-5">
      <h2 className="h2-incio  text-center mb-5">Contáctanos</h2>
      <Row>
        <Col md={6}>
          <h4>Información de contacto</h4>
          <p>Teléfono: 555-5555</p>
          <p>Email: info@tunombre.com</p>
          <h4>¡Si tienes dudas escríbenos un mensaje!</h4>
          <Form>
            <Form.Group controlId="formNombre">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Ingrese su email" />
            </Form.Group>
            <Form.Group controlId="formMensaje">
              <Form.Label></Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Ingrese su mensaje"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="contact-button">
              Enviar
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <div>
            <div ref={mapContainer} style={{ height: 500, margin: 20 }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactBody;
