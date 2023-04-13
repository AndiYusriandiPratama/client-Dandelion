/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import {Container, Row, Col} from "react-bootstrap"


const Footer = () => {
    return (
       <div className="footer pb-3 pt-4 mt-5 p-1-auto">
        <Container>
            <Row>
                <Col>
                    <h3 className="fw-bold text-white">DandelionMusic</h3>
                </Col>
                <Col className="text-end">
                    <a class="bi bi-facebook text-white fs-2 mx-2" href="https://web.facebook.com/monkeyguns"></a>
                    <a class="bi bi-instagram text-white fs-2 mx-2" href="https://www.instagram.com/yusriandipratama/"></a>
                    <a class="bi bi-github text-white fs-2 mx-2" href="https://github.com/AndiYusriandiPratama/backEnd-Dandelion"></a>
                    <a class="bi bi-linkedin text-white fs-2 mx-2" href="https://www.linkedin.com/in/andi-yusriandi-236b18206/"></a>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-center text-white-50">© Copyright by Dandelion 2023, AllRight Right Reserved</p>
                </Col>
            </Row>
        </Container>
       </div>
  );
}

export default Footer