import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { BsWhatsapp, BsFacebook, BsInstagram, BsGoogle } from "react-icons/bs";
import Logo from "../assets/logo//Diseño sin título (37).png"

function Footer() {
    return (
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="redes-container d-flex justify-content-center p-4 border-bottom">
          <div>
            <a href="">
              <BsFacebook className="logo-redes" />
            </a>
            <a href="">
              <BsWhatsapp className="logo-redes" />
            </a>
            <a href="">
              <BsInstagram className="logo-redes" />
            </a>
            <a href="">
              <BsGoogle className="logo-redes" />
            </a>
          </div>
        </section>

        <section className="input-container">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="sub-text pt-2">
                  <strong>¡Suscríbete para recibir ofertas!</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  label=" "
                  placeholder="Email"
                  className="mb-4"
                  labelClass="active"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline type="submit" className="sub-button mb-4">
                  Suscríbete
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <MDBIcon icon="gem" className="me-3" />
                <img
                  src={Logo}
                  width="30"
                  height="30"
                  className="logo-header d-inline-block align-top"
                  alt="Logo"
                />
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="" />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="" />
                  info@example.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="" /> + 01
                  234 567 88
                </p>
                <p>
                  <MDBIcon color="secondary" icon="print" className="" /> + 01
                  234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "#ffa71e", color: "white" }}
        >
          Pascal Correa© 2021 Copyright
        </div>
      </MDBFooter>
    );
  }
  
  export default Footer;