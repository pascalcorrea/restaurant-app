import React from "react";
import { Row, Col } from "react-bootstrap";
import ImageSlider from "../components/Slider";
import { GrMapLocation, GrContactInfo } from "react-icons/gr";
import { BiFoodMenu } from "react-icons/bi";

function InicioBody() {
  return (
    <section>
      <Row className="inicio-container">
        <Col className="slider-container">
          <ImageSlider className="slider" />
        </Col>

        <Col className="texto-container">
          <Row>
            <Col>
              <h2 className="h2-incio">ORIGINAL BURGER</h2>
              <p className="p-inicio2">
                En nuestro restaurante, nos enorgullecemos de ofrecer algunas de
                las hamburguesas más deliciosas y jugosas de la ciudad. Todas
                nuestras hamburguesas se preparan con carne de la mejor calidad,
                y se cocinan a la perfección para asegurar una experiencia de
                sabor inigualable.
              </p>
            </Col>
          </Row>

          <Row>
            <Col className="icono-container">
              <p className="p-inicio">Menu</p>
              <a href="/carta">
              <BiFoodMenu className="icono-inicio"/>
              </a>
            </Col>
            <Col className="icono-container">
              <p className="p-inicio">Ubicación</p>
              <a href="/ubicacion">
              <GrMapLocation className="icono-inicio"/>
              </a>
            </Col>
            <Col className="icono-container">
              <p className="p-inicio">Contacto</p>
              <a href="/contacto">
              <GrContactInfo className="icono-inicio"/>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
}

export default InicioBody;
