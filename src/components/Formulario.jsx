import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ListaCitas from "./ListaCitas";

const Formulario = () => {

  const citasLocalstorage = JSON.parse(localStorage.getItem("listaCitas")) || [];
  const [citas, setCitas] = useState(citasLocalstorage);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    localStorage.setItem("listaCitas", JSON.stringify(citas))
  }, [citas]);

  const agregarCitas = (data) => {
    setCitas([...citas, data]);
    reset();
  };

  const borrarCita = (cita) => {
    const citasFiltradas = citas.filter((item) => item !== cita)
    setCitas(citasFiltradas)
  }

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
      <Form className="mx-5 mt-5" onSubmit={handleSubmit(agregarCitas)}>
        <Form.Group className="mb-3 d-flex align-items-start" controlId="formNombreMascota">
  <Form.Label className="me-3">
    <strong>Nombre de mascota:</strong>
  </Form.Label>

  <div className="d-flex flex-column w-100">
    <Form.Control
      type="text"
      placeholder="nombre de mascota"
      {...register("nombreMascota", {
        required: "El nombre de la mascota es obligatorio",
        minLength: { value: 3, message: "Mínimo 3 caracteres" },
        maxLength: { value: 50, message: "Máximo 50 caracteres" },
        pattern: {
          value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/,
          message: "Solo letras y espacios",
        },
      })}
    />
    <Form.Text className="text-danger">
      {errors.nombreMascota?.message}
    </Form.Text>
  </div>
</Form.Group>

        <Form.Group
          className="mb-3 d-flex align-items-start"
          controlId="formNombreDueno"
        >
          <Form.Label className="me-3">
            <strong>Nombre de dueño:</strong>
          </Form.Label>
          <div className="d-flex flex-column w-100">
          <Form.Control
            type="text"
            placeholder="nombre de dueño"
            {...register("nombreDueño", {
              required: "El nombre de la mascota es obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre de la mascota debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 30,
                message:
                  "El nombre de la mascota debe tener como máximo 30 caracteres",
              },
              pattern: {
                value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,30}$/,
                message:
                  "El nombre de la mascota solo debe contener letras y espacios",
              },
            })}
          />
          {errors.nombreDueño && (
            <Form.Text className="text-danger">
              {errors.nombreDueño.message}
            </Form.Text>
          )}
          </div>
        </Form.Group>
        <div className="d-flex gap-3 mb-3">
          <Form.Group
            className="mb-3 d-flex align-items-start w-100"
            controlId="formFecha"
          >
            <Form.Label className="me-3">
              <strong>Fecha</strong>
            </Form.Label>
            <div className="d-flex flex-column w-100">
            <Form.Control
              type="date"
              placeholder="dd/mm/yyyy"
              {...register("inputFecha", {
                required: "La fecha es obligatoria",
              })}
            />
            {errors.inputFecha && (
              <Form.Text className="text-danger mx-3">
                {errors.inputFecha.message}
              </Form.Text>
            )}
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-start w-100"
            controlId="formHora"
          >
            <Form.Label className="me-3">
              <strong>Hora:</strong>
            </Form.Label>
            <div className="d-flex flex-column w-100">
            <Form.Control
              type="time"
              placeholder="hh:mm"
              {...register("inputHora", {
                required: "La hora es obligatoria",
              })}
            />
            {errors.inputHora && (
              <Form.Text className="text-danger mx-3">
                {errors.inputHora.message}
              </Form.Text>
            )}
            </div>
          </Form.Group>
        </div>
        <Form.Group className="mb-3 d-flex" controlId="formSintomas">
          <Form.Label className="me-3">
            <strong>Sintomas:</strong>
          </Form.Label>
          <div className="d-flex flex-column w-100">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="describir sintomas"
            {...register("inputSintomas", {
              required: "Los síntomas son obligatorios",
              minLength: {
                value: 5,
                message: "La descripción debe tener al menos 5 caracteres",
              },
              maxLength: {
                value: 200,
                message: "La descripción debe tener como máximo 200 caracteres",
              },
            })}
          />
          {errors.inputSintomas && (
              <Form.Text className="text-danger mx-3">
                {errors.inputSintomas.message}
              </Form.Text>
            )}
            </div>
        </Form.Group>
        <div className="mt-3 text-center">
          <Button className="rounded-0 mb-5" variant="primary" type="submit">
            Agregar nueva cita
          </Button>
        </div>
      </Form>
      <ListaCitas citas={citas} borrarCita={borrarCita}></ListaCitas>
    </div>
  );
};

export default Formulario;
