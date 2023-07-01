export class User {
  id?: number;
  name: string;
  surname: string;
  phoneNumber: string;
  address: string;
  fullAddress?: string;
  username: string;
  password: string;
  role: string;

  constructor({
    name,
    surname,
    phoneNumber,
    address,
    fullAddress,
    username,
    password,
    role = 'EMPLOYEE'
  }: User) {
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.fullAddress = fullAddress;
    this.username = username;
    this.password = password;
    this.role = role;
  }
}
