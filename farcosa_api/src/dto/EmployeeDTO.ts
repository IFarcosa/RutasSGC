import EmployeeModel from '@persistence/Models/EmployeeModel'

export default function EmployeeDTO(payload: EmployeeModel) {
  return {
    empleadoId: payload.EMPLEADO,
    nombre: payload.NOMBRE,
    identificacion: payload.IDENTIFICACION
  }
}
