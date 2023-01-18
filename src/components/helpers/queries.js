const URL =  "http://localhost:3004/tareas";

export const consultarApi = async()=>{
    try {
        const respuesta = await fetch(URL);
        const listaTarea = await respuesta.json();
        console.log(listaTarea);
        return listaTarea;
    } catch (error) {
        console.log(error);
    }
}