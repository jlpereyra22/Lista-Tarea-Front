const URL = "http://localhost:3004/tareas";

export const consultarApi = async () => {
  try {
    const respuesta = await fetch(URL);
    const listaTarea = await respuesta.json();
    console.log(listaTarea);
    return listaTarea;
  } catch (error) {
    console.log(error);
  }
};

export const agregarTareaApi = async (tarea) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tarea),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTareaApi = async (id) => {
  try {
    const respuesta = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
