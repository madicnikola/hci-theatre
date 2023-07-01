export class User {
  id: number;
  name: string;
  surname: string;
  phoneNumber: string;
  address: string;
  username: string;
  password: string;
  role: string;

  constructor(
    id: number = 0,
    name: string,
    surname: string,
    phoneNumber: string,
    address: string,
    username: string,
    password: string,
    role: string = 'EMPLOYEE'
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.username = username;
    this.password = password;
    this.role = role;
  }
}
