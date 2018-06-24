import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Footer() {
  return (
    <footer>
      <Container
        fluid
        style={{
          position: 'fixed',
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 80%)'
        }}
      >
        <Row>
          <Col className="text-center" xs={12}>
            <h3 className="mb-0">contato@oi.com</h3>
            <h4 className="mt-0">algum texto que não sei o que é</h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
