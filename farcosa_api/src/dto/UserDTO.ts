import UserModel from '@persistence/Models/UserModel'

export default function UserDTO(payload: UserModel) {
  return {
    id: payload.ID,
    employeeId: payload.EMPLOYEE_ID,
    user: payload.USER,
    role: payload.ROLE
  }
}
