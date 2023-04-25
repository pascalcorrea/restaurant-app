import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import menuData from '../models/menu';

function CartaBody() {
  return (
    <Container className="mt-5">
      <h2 className="h2-incio  text-center mb-5">Nuestro Menú</h2>
      <p className="text-center mb-5">¡Bienvenido a nuestro menú de hamburguesas! Aquí encontrarás la mejor selección de productos frescos y de alta calidad para crear las hamburguesas más deliciosas. Nos enorgullece ofrecerte una variedad de opciones para satisfacer todos los gustos, desde hamburguesas clásicas hasta creaciones innovadoras y atrevidas. ¡Te aseguramos que encontrarás algo que te encantará!</p>
      <Row xs={1} sm={2} md={3} className="justify-content-center">
        {menuData.map((item, index) => (
          <Col key={index} className="menu-box mb-5">
            <Card className="h-100">
              <Card.Img variant="top" src={item.imagen} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.ingredientes.join(", ")}</Card.Text>
                <Card.Text>${item.precio.toFixed(3)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CartaBody;
