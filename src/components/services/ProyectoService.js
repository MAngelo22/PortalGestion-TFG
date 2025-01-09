import Api from "../../Api";

class ProyectoService {
    apiProyecto = 'api/proyecto';

    async obtenerProyectos() {
        try {
            const respuesta = await Api.get(this.apiProyecto + '/all');
            const proyectos = respuesta.data;
            console.log('obtenerProyectos ');
            console.log('Respuesta: ', respuesta);
            console.log('Proyectos: ', proyectos);
            return proyectos;
        } catch (error) {
            console.error('Hubo un problema con la solicitud de proyectos:' , error);
        }
    }

    // async crearProyecto(proyecto) {
    //     try {
    //         const respuesta = await Api.post(this.apiProyecto + '/new', proyecto);
    //         const proyecto = respuesta.data;
    //         console.log('crearProyecto ');
    //         console.log('Respuesta: ', respuesta);
    //         console.log('Proyecto: ', proyecto);
    //         return respuesta;
    //     } catch (error) {
    //         console.error('Hubo un problema con la creación del proyecto:' , error);
    //     }
    // }

    // async editarProyecto(id, proyecto) {
    //     try {
    //         const respuesta = await Api.put(this.apiProyecto + `/edit/${id}`, proyecto);
    //         const proyecto = respuesta.data;
    //         console.log('editarProyecto ');
    //         console.log('Respuesta: ', respuesta);
    //         console.log('Proyecto: ', proyecto);
    //         return respuesta;
    //     } catch (error) {
    //         console.error('Hubo un problema con la edición del proyecto:' , error);
    //     }
    // }

    // async deleteProyecto(id) {
    //     try {
    //         const respuesta = await Api.delete(this.apiProyecto + `/del/${id}`);
    //         const proyecto = respuesta.data;
    //         console.log('deleteProyecto ');
    //         console.log('Respuesta: ', respuesta);
    //         console.log('Proyecto: ', proyecto);
    //         return respuesta;
    //     } catch (error) {
    //         console.error('Hubo un problema con el borrado del proyecto:' , error);
    //     }
    // }

}

export default ProyectoService;