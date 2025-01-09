import Api from "../../Api";

class CursoService {
  constructor() {
    this.apiCurso = "api/curso";
  }

  async obtenerCursos() {
    try {
      const respuesta = await Api.get(this.apiCurso + "/all");
      const cursos = respuesta.data;
      console.log("obtenerCursos ");
      console.log("Respuesta: ", respuesta);
      console.log("Cursos: ", cursos);
      return cursos;
    } catch (error) {
      console.error("Hubo un problema con la solicitud de cursos:", error);
    }
  }

  //   async crearCurso(curso) {
  //     try {
  //       const respuesta = await Api.post(this.apiCurso + "/new", curso);
  //       const curso = respuesta.data;
  //       console.log("crearCurso ");
  //       console.log("Respuesta: ", respuesta);
  //       console.log("Curso: ", curso);
  //       return respuesta;
  //     } catch (error) {
  //       console.error("Hubo un problema con la creación del curso:", error);
  //     }
  //   }

  //   async editarCurso(id, curso) {
  //     try {
  //       const respuesta = await Api.put(
  //         this.apiCurso + `/edit/${id}`,curso);
  //       const curso = respuesta.data;
  //       console.log("editarCurso ");
  //       console.log("Respuesta: ", respuesta);
  //       console.log("Curso: ", curso);
  //       return respuesta;
  //     } catch (error) {
  //       console.error("Hubo un problema con la edición del curso:", error);
  //     }
  //   }

  //   async deleteCurso(id) {
  //     try {
  //       const respuesta = await Api.delete(this.apiCurso + `/del/${id}`);
  //       const curso = respuesta.data;
  //       console.log("deleteCurso ");
  //       console.log("Respuesta: ", respuesta);
  //       console.log("Curso: ", curso);
  //       return respuesta;
  //     } catch (error) {
  //       console.error("Hubo un problema con el borrado del curso:", error);
  //     }
  //   }
}

const cursoServiceInstance = new CursoService();
export default cursoServiceInstance;
