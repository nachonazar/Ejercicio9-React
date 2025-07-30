import React from "react";
import ItemCita from "./ItemCita";

const ListaCitas = ({ citas, borrarCita }) => {
  return (
   <>
      {citas.length === 0 ? (
        <>
          <p className="text-center mt-4">
            <strong>No hay citas</strong>
          </p>
          <div className="mb-5"
            style={{
              height: "2px",
              backgroundColor: "black",
              margin: "20px auto",
              width: "95%",
            }}
          ></div>
        </>
      ) : (
        <>
        <h2 className="text-center mt-4">Administra las citas aqui</h2>
        <div className="row mt-4">
          {citas.map((item, indice) => (
            <div
              className="col-md-4 mb-4 mx-5 mt-4 align-items-center"
              key={indice}
            >
              <ItemCita cita={item} borrarCita={borrarCita} />
            </div>
          ))}
        </div>
        </>
      )}
    </>
  );
};

export default ListaCitas;
