export interface RegisterRequestPayload {
  name: string;
  surname: string;
  birthDate: Date;

  email: string;
  username: string;
  password: string;

  address: string;
  fullAddress: string;
  phoneNumber: string;

  role: string;
}
