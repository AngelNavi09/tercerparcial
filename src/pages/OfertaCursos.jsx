import { Card, Button, Modal, Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';


import tinkuImg from '/Users/navil/INF122-TERCER-PARCIAL/src/assets/tinku.jpg';
import sayaImg from '/Users/navil/INF122-TERCER-PARCIAL/src/assets/saya.jpg';
import morenadaImg from '/Users/navil/INF122-TERCER-PARCIAL/src/assets/morenada.jpg';

export default function OfertaCursos() {
  const [showModal, setShowModal] = useState(false);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  const cursos = [
    { 
      id: 1, 
      nombre: "Tinku", 
      descripcion: "Danza guerrera de los Andes", 
      imagen: tinkuImg,
      precio: "Bs. 250"
    },
    { 
      id: 2, 
      nombre: "Saya", 
      descripcion: "Ritmo afroboliviano", 
      imagen: sayaImg,
      precio: "Bs. 200"
    },
    { 
      id: 3, 
      nombre: "Morenada", 
      descripcion: "Danza del Gran Poder", 
      imagen: morenadaImg,
      precio: "Bs. 300"
    }
  ];

  const handleModal = (curso) => {
    setCursoSeleccionado(curso);
    setShowModal(true);
  };

  return (
    <div className="p-4 w-100 d-flex flex-column align-items-center"> 
      <h2 className="text-center mb-4 display-5 fw-bold text-danger">Oferta de Cursos</h2> 
      
      <Row className="justify-content-center g-4" style={{ maxWidth: '1200px' }}> 
        {cursos.map((curso) => (
          <Col key={curso.id} xs={12} md={6} lg={4} className="d-flex">
            <Card className="w-100 shadow-sm hover-shadow"> 
              <Card.Img 
                variant="top" 
                src={curso.imagen} 
                style={{ 
                  height: '200px', 
                  objectFit: 'cover' 
                }} 
              />
              <Card.Body className="d-flex flex-column text-center"> 
                <Card.Title className="fw-bold">{curso.nombre}</Card.Title>
                <Card.Text className="text-muted">{curso.descripcion}</Card.Text>
                <Button 
                  variant="outline-danger" 
                  onClick={() => handleModal(curso)}
                  className="mt-auto mx-auto" 
                >
                  Ver Precio
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>


      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)}
        centered 
      >
        <Modal.Header closeButton className="border-0"> 
          <Modal.Title className="fw-bold text-center w-100"> 
            {cursoSeleccionado?.nombre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4"> 
          {cursoSeleccionado && (
            <>
              <Image 
                src={cursoSeleccionado.imagen} 
                fluid 
                rounded 
                className="mb-4"
                style={{ maxHeight: '200px' }}
              />
              <p className="fs-5">
                Precio: <span className="text-success fw-bold">{cursoSeleccionado.precio}</span> por mes.
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center"> 
          <Button 
            variant="danger" 
            onClick={() => setShowModal(false)}
            className="px-4"
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}