import { Accordion } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa'; 

export default function Inicio() {
  const danzas = [
    { region: "Andina", baile: "Tinku" },
    { region: "Valles", baile: "Cueca" },
    { region: "Oriente", baile: "Taquirari" },
    { region: "Amazonía", baile: "Macheteros" },
    { region: "Chaco", baile: "Chovena" }
  ];

  return (
    <div className="d-flex flex-column align-items-center p-4 w-100">
      <h2 className="mb-4 text-center fw-bold" style={{ color: '#dc3545' }}> 
        <FaMapMarkerAlt className="me-2" /> 
        Danzas por Región de Bolivia
      </h2>
      
      <Accordion className="w-100" style={{ maxWidth: '800px' }}>
        {danzas.map((item, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header className="fw-bold"> 
              {item.region}
            </Accordion.Header>
            <Accordion.Body className="text-center fs-5"> 
              {item.baile}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}