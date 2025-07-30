import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const ItemCita = ({ cita, borrarCita }) => {
  return (
    <Card className="rounded-0">
      <Card.Header>
        <div className="d-flex align-items-center gap-3">
          <div
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "blue",
              borderRadius: "50%",
            }}
          ></div>
          <div className="d-flex flex-column">
            <h5>Mascota: {cita.nombreMascota}</h5>
            <div className="d-flex gap-2">
              <span>Dueño: {cita.nombreDueño}</span>
            </div>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Form.Group
          className="mb-3 d-flex align-items-center w-100"
          controlId="formFecha"
        >
          <Form.Label className="me-3">
            <strong>Fecha</strong>
          </Form.Label>
          <Form.Control type="date" value={cita.inputFecha} />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex align-items-center w-100"
          controlId="formHora"
        >
          <Form.Label className="me-3">
            <strong>Hora:</strong>
          </Form.Label>
          <Form.Control type="time" value={cita.inputHora}/>
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="formSintomas">
          <Form.Label className="me-3">
            <strong>Sintomas:</strong>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={cita.inputSintomas}
          />
        </Form.Group>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-end">
        <Button className="rounded-0" variant="danger" onClick={() => borrarCita(cita)}>
          Borrar
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ItemCita;
