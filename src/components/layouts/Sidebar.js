import React from "react";
import NuevoProyecto from "../proyectos/NuevoProyecto";
import ListadoProyectos from "../proyectos/ListadoProyectos";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Task</span>
        <NuevoProyecto />
      </h1>
      <div className="proyectos">
        <h1>Tus proyectos</h1>
        <ListadoProyectos />
      </div>
    </aside>
  );
};

export default Sidebar;
