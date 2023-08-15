export default interface Repository {
  findAll?: <T>() => Promise<T>

  findById?: <T>(id: string | number) => Promise<T>
}
