import React from "react";
import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <div>
      <h2 className="text-center mt-4">
        Administrador pacientes de veterinaria
      </h2>
      <p className="mx-5 mt-5">
        <strong>Llenar el formulario para crear un cita</strong>
      </p>
      <div
        style={{
          height: "2px",
          backgroundColor: "black",
          margin: "20px auto",
          width: "95%",
        }}
      ></div>
      <Form className="mx-5 mt-5">
        <Form.Group
          className="mb-3 d-flex align-items-center"
          controlId="formNombreMascota">
          <Form.Label>
            <strong>Nombre de mascota:</strong>
          </Form.Label>
          <Form.Control type="text" placeholder="mombre de mascota" />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex align-items-center"
          controlId="formNombreDueno">
          <Form.Label>
            <strong>Nombre de dueño:</strong>
          </Form.Label>
          <Form.Control type="text" placeholder="nombre de dueño" />
        </Form.Group>
        <div className="d-flex gap-3 mb-3">
          <Form.Group
            className="mb-3 d-flex align-items-center w-100"
            controlId="formFecha">
            <Form.Label className="me-3">
              <strong>Fecha</strong>
            </Form.Label>
            <Form.Control type="date" placeholder="dd/mm/yyyy" />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center w-100"
            controlId="formHora">
            <Form.Label className="me-3">
              <strong>Hora:</strong>
            </Form.Label>
            <Form.Control type="time" placeholder="hh:mm" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3 d-flex" controlId="formSintomas">
          <Form.Label className="me-3">
            <strong>Sintomas:</strong>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="describir sintomas"
          />
        </Form.Group>
        <div className="mt-3 text-center">
          <Button className="rounded-0" variant="primary">
            Agregar nueva cita
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Formulario;
