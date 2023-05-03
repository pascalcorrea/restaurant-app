import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Container, Row, Col, Card } from "react-bootstrap";

function CartaBody() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const collectionRef = collection(db, "menu");
        const response = await getDocs(collectionRef);

        const docs = response.docs.map((doc) => {
          const data = doc.data(); // firestore guarda la informacion de cada documento en data()
          data.id = doc.id;
          return data;
        });

        setMenu(docs);
      } catch (error) {
        console.log(error);
      }
    };

    getMenu();
  }, []);

  console.log(menu);

  return (
    <Container className="mt-5">
      <h2 className="h2-incio  text-center mb-5">Nuestro Menú</h2>
      <p className="text-center mb-5">
        ¡Bienvenido a nuestro menú de hamburguesas! Aquí encontrarás la mejor
        selección de productos frescos y de alta calidad para crear las
        hamburguesas más deliciosas. Nos enorgullece ofrecerte una variedad de
        opciones para satisfacer todos los gustos, desde hamburguesas clásicas
        hasta creaciones innovadoras y atrevidas. ¡Te aseguramos que encontrarás
        algo que te encantará!
      </p>
      <Row xs={1} sm={2} md={3} className="justify-content-center">
        {/* Metodo map para crear una columna para cada elemento */}
        {menu.map((plato) => (
          <Col key={plato.id} className="menu-box mb-5">
            <Card className="h-100">
              <Card.Img variant="top" src={plato.image} alt={plato.name} />
              <Card.Body>
                <Card.Title>{plato.name}</Card.Title>
                <Card.Text>{plato.description}</Card.Text>
                <Card.Text>${plato.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CartaBody;
