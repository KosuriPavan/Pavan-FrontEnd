/* eslint-disable react/no-unescaped-entities */

import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { IoLogoYoutube } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa6";

function FooterHomePage() {
  return (
    <Container>
      <footer className="py-5" style={{ marginBottom: "2px" }}>
        <Row>
          <Col xs={6} md={2} className="mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Events
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={6} md={2} className="mb-3">
            <h5>Participants</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Register
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Calender
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={6} md={2} className="mb-3">
            <h5>Performers</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Register
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Contact
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Know More
                </a>
              </li>
            </ul>
          </Col>

          <Col md={5} className="offset-md-1 mb-3">
            <Form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <Form.Label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </Form.Label>
                <Form.Control
                  id="newsletter1"
                  type="text"
                  placeholder="Email address"
                />
                <Button variant="primary">Subscribe</Button>
              </div>
            </Form>
          </Col>
        </Row>

        <Row className="justify-content-between py-4 my-4 border-top">
          <Col xs={6}>
            <p>© 2024 Company, Inc. All rights reserved.</p>
          </Col>
          <Col xs={2}>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <IoLogoYoutube />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <PiInstagramLogoFill />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

export default FooterHomePage;
