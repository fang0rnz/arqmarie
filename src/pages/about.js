import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function About() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={4}>
          <a className="d-block">
            <img
              src="https://source.unsplash.com/user/erondu/600x400"
              className="img-fluid mb-3"
              alt="Unsplash"
            />
          </a>
        </Col>
        <Col md={8}>
          <p>
            Graduada desde 2016, trabalho com representação gráfica de projetos
            2D e 3D, design de interiores e design gráfico.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
