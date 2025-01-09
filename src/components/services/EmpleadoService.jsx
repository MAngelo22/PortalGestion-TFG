import Api from "../../Api";

class EmpleadoService {
  constructor() {
    this.apiEmpleado = "api/empleado";
  }

  async obtenerEmpleados() {
    try {
      const respuesta = await Api.get(this.apiEmpleado + "/all");
      const empleados = respuesta.data;
      console.log("obtenerEmpleados ");
      console.log("Respuesta: ", respuesta);
      console.log("Empleados: ", empleados);
      return empleados;
    } catch (error) {
      console.error("Hubo un problema con la solicitud de empleados:", error);
    }
  }

  //   async crearEmpleado(empleado) {
  //     try {
  //       const respuesta = await Api.post(this.apiEmpleado + "/new", empleado);
  //       const empleado = respuesta.data;
  //       console.log("crearEmpleado ");
  //       console.log("Respuesta: ", respuesta);
  //       console.log("Empleado: ", empleado);
  //       return respuesta;
  //     } catch (error) {
  //       console.error("Hubo un problema con la creación del empleado:", error);
  //     }
  //   }

  //   async editarEmpleado(id, empleado) {
  //     try {
  //       const respuesta = await Api.put(
  //         this.apiEmpleado + `/edit/${id}`,empleado);
  //       const empleado = respuesta.data;
  //       console.log("editarEmpleado ");
  //       console.log("Respuesta: ", respuesta);
  //       console.log("Empleado: ", empleado);
  //       return respuesta;
  //     } catch (error) {
  //       console.error("Hubo un problema con la edición del empleado:", error);
  //     }
  //   }

  //   async deleteEmpleado(id) {
  //     try {
  //       const respuesta = await Api.delete(this.apiEmpleado + `/del/${id}`);
  //       const empleado = respuesta.data;
  //       console.log("deleteEmpleado ");
  //       console.log("Respuesta: ", respuesta);
  //       console.log("Empleado: ", empleado);
  //       return respuesta;
  //     } catch (error) {
  //       console.error("Hubo un problema con el borrado del empleado:", error);
  //     }
  //   }
}

const empleadoServiceInstance = new EmpleadoService();
export default empleadoServiceInstance;
