// Here import repositories
import UserRepository from '@repository/UserRepository'
import VehiculoRepository from '@repository/VehiculoRepository'
import FacturaRepository from '@repository/FacturaRepository'
import HojaRutaRepository from '@repository/HojaRutaRepository'
import EmpleadoRepository from '@repository/EmpleadoRepository'

// Here import services
import UserService from '@service/UserService'
import JwtService from '@service/JwtService'
import VehiculoService from '@service/VehiculoService'
import FacturaService from '@service/FacturaService'
import HojaRutaService from '@service/HojaRutaService'
import EmployeeService from '@service/EmployeeService'

// Here instantiate Services
export const userService = new UserService(new UserRepository())
export const jwtService = new JwtService()
export const vehiculoService = new VehiculoService(new VehiculoRepository())
export const facturaService = new FacturaService(new FacturaRepository())
export const hojaRutaService = new HojaRutaService(new HojaRutaRepository())
export const employeeService = new EmployeeService(new EmpleadoRepository())
