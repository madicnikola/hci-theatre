export class User {
  name: string;
  surname: string;
  phoneNumber: string;
  address: string;
  username:string;
  password: string;

  constructor(name: string, surname: string, phoneNumber: string, address: string, username: string, password: string) {
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.username = username;
    this.password = password;
  }

}
